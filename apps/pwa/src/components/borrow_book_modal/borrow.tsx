import { Flex, Form, Input, Typography } from "antd";

function BorrowBookModal(data: any) {
  console.log(data);
  return (
    <div>
      <Form>
        <div className="mt-4 flex flex-col justify-center w-full">
          <Flex vertical>
            <Typography.Title level={5}>Borrow Date</Typography.Title>
            <Form.Item rules={[{ required: true }]}>
              <Input
                defaultValue={new Date().toLocaleDateString()}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Flex>
          <Flex vertical>
            <Typography.Title level={5}>Return date</Typography.Title>
            <Form.Item rules={[{ required: true }]}>
              <Input size="large" type="date" className="w-full" />
            </Form.Item>
          </Flex>
        </div>
      </Form>
    </div>
  );
}

export default BorrowBookModal;
