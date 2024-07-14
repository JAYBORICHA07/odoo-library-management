import React, { useEffect } from "react";
import { Button, Result } from "antd";
import { CircleLoading } from "../../../components/loading";
import { trpc } from "../../../trpc/trpc";
import { useUserActions } from "../../../store/userStore";
import { useRouter } from "../../../router/hooks";

export const AuthSuccess: React.FC = () => {
  const router = useRouter();
  const { setUserInfo, setUserToken } = useUserActions();
  const userSession = trpc.user.useQuery(undefined, {
    retry: 2,
    staleTime: Infinity,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
  });
  useEffect(() => {
    if (userSession.data) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setUserToken({ exp: userSession.data.exp, iat: userSession.data.iat });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const userData = userSession?.data?.user[0]?.id
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          userSession.data.user[0]
        : userSession.data.user;
      setUserInfo(userData);

      router.replace("/");
    }
  }, [router, userSession.isLoading]);

  if (userSession.isError) {
    return (
      <Result
        status="error"
        title="Failed to Authenticate!"
        subTitle="Please try again."
        extra={[
          <Button type="primary" onClick={() => router.replace("/auth/login")}>
            Login
          </Button>,
        ]}
      />
    );
  } else if (userSession.isLoading) {
    <CircleLoading />;
  } else {
    return (
      <Result
        status="success"
        title="Successfully Authenticated!"
        subTitle="Redirecting..."
      />
    );
  }
};
