import { Button, Flex, Input, Modal, Select, Tag, Typography } from "antd";
import React, { useState } from "react";
import Card from "@/components/card";
import { trpc } from "@/trpc/trpc";
import BorrowBookModal from "../../components/borrow_book_modal/borrow";

export const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const allBooks = trpc.getAllBooks.useQuery();
  const data = allBooks.data;
  console.log(data);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <div className=" mb-8">
        <Flex style={{ gap: "20px" }}>
          <Input.Search style={{ width: "40%", marginLeft: "150px" }} />
          <Select
            showSearch
            placeholder="Category"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Flex>
      </div>
        <h3 className=" ml-10 font-bold">New Arrivals</h3>
      <div className=" flex justify-center">
      <div className=" flex gap-4 overflow-x-scroll max-w-6xl max-h-96 ">
        {data?.map((data)=>(
            <Card className=" min-w-40 flex flex-col">
            <img
              src=
              {data.image}
              alt="img"
              className=" mb-2"
            />
            <div className=" flex flex-col justify-start">
              <Typography.Text>{data.title}</Typography.Text>
              <Typography.Text style={{ marginLeft: "0px", fontWeight: "bold" }}>
                {data.author}
              </Typography.Text>
            </div>
          </Card>
  
        ))
        }
        
      
      </div>
      </div>
      

      <div className=" grid grid-cols-2 gap-2 mt-12 ml-5  ">
        {data?.map((data)=>(
           <div className=" grid grid-cols-3  gap-2 m-4 rounded-xl shadow-lg">
           <div className=" col-span-1 m-2 p-2">
             <img
               src={data.image}
               alt="img"
             />
             <h2 className=" mt-2 font-bold">{data.author}</h2>
           </div>
           <div className=" col-span-2 m-2 p-2">
             <h3>
               {data.description}
             </h3>
             <Tag
               bordered={false}
               color="success"
               style={{
                 paddingLeft: "15px",
                 paddingRight: "15px",
                 paddingTop: "10px",
                 paddingBottom: "10px",
                 fontSize: "15px",
                 marginTop: "10px",
               }}
             >
               success
             </Tag>{" "}
             <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <BorrowBookModal />
      </Modal>
           </div>
         </div>
        ))}
       
      </div>
    </div>
  );
};
