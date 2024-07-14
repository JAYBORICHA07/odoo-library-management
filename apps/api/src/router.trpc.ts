import { inferRouterOutputs } from "@trpc/server";
// import * as packageJson from "../package.json";
import { publicProcedure, router, protectedProcedure } from "./context.trpc";
import { bookController } from "./controllers/books.controller";
import { User } from "./db/tables/user.table";
import { db } from "./db/db.config";

export const trpcRouter = router({
  user: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.user;
    return user;
  }),
  version: publicProcedure.query(() => ({})),
  createLibrarian: publicProcedure.query(async ({ ctx, input }) => {
    async (
      userDetails: Omit<User, "id" | "createdAt" | "updatedAt">
    ): Promise<User> => {
      const newUser = await db.user.selectAll().create(userDetails);
      return newUser;
    };
  }),
  addBooks: bookController.addBook,
  deleteBooks: bookController.deleteBook,
  updateBooks: bookController.updateBook,
  getAllBooks: bookController.getAllBooks,
  getBooksByIsbn: bookController.getBooksByIsbn,
  getBooksByTitle: bookController.getBooksByTitle,
  getBooksByAuthor: bookController.getBooksByAuthor,
  getBooksByPublisher: bookController.getBooksByPublisher,
  getBooksByPublishedYear: bookController.getBooksByPublishedYear,
  getBooksByGenre: bookController.getBooksByGenre,
  getBooksByAvailable: bookController.getBooksByAvailable,
});

// export type definition of API
export type ApiRouter = typeof trpcRouter;
export type RouterOutputs = inferRouterOutputs<ApiRouter>;
