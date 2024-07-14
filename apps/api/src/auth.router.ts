import { OAuth2Namespace } from "@fastify/oauth2";
import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { env } from "./configs/env.config";
import { addNewUser, getUserByEmail } from "./services/user.service";
import { User } from "./db/tables/user.table";

declare module "fastify" {
  interface FastifyInstance {
    googleOAuth2: OAuth2Namespace;
  }
}

export const authRouter = (
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: () => void
) => {
  fastify.get("/login/failed", (_, reply: FastifyReply) => {
    reply.status(401).send({ message: "Login Failed" });
  });

  fastify.post("/logout", async (req: FastifyRequest, reply: FastifyReply) => {
    req.log.debug("logout");

    reply.clearCookie("session", {
      path: "/",
      domain: new URL(env.FRONTEND_URL as string).hostname,
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });
    reply.send({ message: "Logged out" });
  });

  fastify.post(
    "/register",
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        console.log("login");
        const userInfo: Omit<User, "id"> = req.body as Omit<User, "id">;

        console.log("userInfo", userInfo);

        if (!userInfo?.email) {
          throw new Error("Email not found in user info");
        }

        let user = await getUserByEmail(userInfo.email);

        if (!user[0]?.id) {
          user = await addNewUser({
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            role: userInfo.role,
          });
        }
        console.log("user created", user);
        const jwtToken = fastify.jwt.sign({ user }, { expiresIn: "7d" });

        reply.setCookie("session", jwtToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          path: "/",
          domain: new URL(env.FRONTEND_URL as string).hostname,
        });

        reply.redirect(`${env.FRONTEND_URL}/auth/success`);
      } catch (error) {
        req.log.error(error);
        reply.redirect("/auth/login/failed");
      }
    }
  );

  fastify.post("/login", async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userInfo: {
        email: string;
        password: string;
      } = req.body as {
        email: string;
        password: string;
      };

      if (!userInfo?.email) {
        throw new Error("Email not found in user info");
      }

      let user = await getUserByEmail(userInfo.email);
      console.log("user found !!!", user);

      if (!user[0]?.id) {
        throw new Error("User not found, please register");
      }
      const jwtToken = fastify.jwt.sign({ user }, { expiresIn: "7d" });

      reply.setCookie("session", jwtToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        domain: new URL(env.FRONTEND_URL as string).hostname,
      });

      reply.redirect(`${env.FRONTEND_URL}/auth/success`);
    } catch (error) {
      req.log.error(error);
      reply.redirect("/auth/login/failed");
    }
  });

  done();
};
