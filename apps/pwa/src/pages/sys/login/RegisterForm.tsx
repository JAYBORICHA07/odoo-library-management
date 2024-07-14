import { Button, Flex, Form, Input, message, Typography } from "antd";
import {
  LoginStateEnum,
  useLoginStateContext,
} from "./providers/LoginStateProvider";
import Card from "@/components/card";
import { useRouter } from "@/router/hooks";

interface LoginDetails {
  email: string;
  password: string;
}

function RegisterForm() {
  const { loginState } = useLoginStateContext();
  const router = useRouter();
  const [form] = Form.useForm();
  if (loginState !== LoginStateEnum.LOGIN) return null;

  const handleRegister = async (formData: LoginDetails) => {
    await fetch(import.meta.env.VITE_BE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, role: "user" }),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.replace("/auth/success");
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <Card>
      <div className="w-full">
        <div>
          <Typography.Title>Register</Typography.Title>
        </div>
        <Form form={form} onFinish={handleRegister}>
          <div className="mt-4 flex flex-col justify-center w-full">
            <Flex vertical>
              <Typography.Title level={5}>Name</Typography.Title>
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input
                  size="large"
                  type="text"
                  placeholder="Name"
                  className="w-full"
                />
              </Form.Item>
            </Flex>
            <Flex vertical>
              <Typography.Title level={5}>Email</Typography.Title>
              <Form.Item name="email" rules={[{ required: true }]}>
                <Input
                  size="large"
                  type="text"
                  placeholder="Email"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Flex>
            <Flex vertical>
              <Typography.Title level={5}>Password</Typography.Title>
              <Form.Item name="password" rules={[{ required: true }]}>
                <Input
                  size="large"
                  type="text"
                  placeholder="Password"
                  className="w-full"
                />
              </Form.Item>
            </Flex>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{ marginTop: "1rem" }}
            >
              Login with Google
            </Button>
            <a
              href="/auth/login"
              style={{ alignSelf: "center", marginTop: "0.5rem" }}
            >
              Back to Login
            </a>
          </div>
        </Form>
      </div>
    </Card>
  );
}

export default RegisterForm;
