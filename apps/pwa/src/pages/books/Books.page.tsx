import { trpc } from "@/trpc/trpc";
import { Button, Flex, Input } from "antd";
import React from "react";

export const Books: React.FC = () => {
  const allBooks = trpc.getAllBooks.useQuery();
  const data = allBooks.data;
  console.log(data);

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <div className=" mb-8">
        <Flex style={{ gap: "20px" }}>
          <Input.Search style={{ width: "40%", marginLeft: "150px" }} />
          <Button type="primary">Add Book</Button>
        </Flex>
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
            <h3 className=" mt-3 font-bold">{data.genre}</h3>
            <div className=" flex gap-4 mt-4">
              <Button type="primary">Edit</Button>
              <Button type="primary" danger>
                Delete
              </Button>
            </div>
          </div>
        </div>
        ))}
        
       
      </div>
    </div>
  );
};
