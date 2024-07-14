import { useState } from "react";
/* eslint-disable prefer-const */
import {
  Button,
  Empty,
  Flex,
  Input,
  Modal,
  Select,
  Tag,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import Card from "@/components/card";
import { trpc } from "@/trpc/trpc";
import BorrowBookModal from "../../components/borrow_book_modal/borrow";

export const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookData, setbookData] = React.useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = React.useState([]);
  const allBooks = trpc.getAllBooks.useQuery().data;
  useEffect(() => {
    setData(allBooks ?? []);
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  const handleSearch = (value: string) => {
    console.log("search:", value);
    const data = trpc.getBooksByTitle.useQuery({ title: value });
    console.log(data);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setData(data.data ?? []);
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <div className=" mb-8 w-full flex justify-center items-center">
        <Flex
          style={{ gap: "20px", width: "100%" }}
          justify="center"
          align="center"
        >
          <Input.Search
            placeholder="Type Book's name to search"
            style={{ width: "40%" }}
            onSearch={(input) => {
              handleSearch(input);
            }}
          />
        </Flex>
      </div>
      <h3 className=" ml-10 font-bold">New Arrivals</h3>
      <div className=" flex justify-center">
        <div className=" flex gap-4 overflow-x-scroll max-w-6xl max-h-96 ">
          {data?.length > 0 ? (
            data?.map((data) => (
              <Card className=" min-w-40 flex flex-col">
                <img src={data.image} alt="img" className=" mb-2" />
                <div className=" flex flex-col justify-start">
                  <Typography.Text>{data.title}</Typography.Text>
                  <Typography.Text
                    style={{ marginLeft: "0px", fontWeight: "bold" }}
                  >
                    {data.author}
                  </Typography.Text>
                </div>
              </Card>
            ))
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-2 mt-12 ml-5  ">
        {data?.map((data) => (
          <div className=" grid grid-cols-3  gap-2 m-4 rounded-xl shadow-lg">
            <div className=" col-span-1 m-2 p-2">
              <img src={data.image} alt="img" />
              <h2 className=" mt-2 font-bold">{data.author}</h2>
            </div>
            <div className=" col-span-2 m-2 p-2">
              <h3>{data.description}</h3>
              <Tag
                bordered={false}
                color={data.available ? "success" : "error"}
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
              >
                {data.available ? "Available" : "Not Available"}
              </Tag>{" "}
              <Button
                type="primary"
                onClick={async () => {
                  setbookData(data);
                  setIsModalOpen(true);
                }}
              >
                Borrow
              </Button>
            </div>
          </div>
        ))}
        <Modal
          key={data?.id}
          title="Borrow Book model"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <BorrowBookModal data={bookData} />
        </Modal>
      </div>
    </div>
  );
};
