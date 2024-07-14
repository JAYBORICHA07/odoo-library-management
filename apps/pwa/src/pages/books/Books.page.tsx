import { Button, Flex, Input } from "antd";
import React from "react";

export const Books: React.FC = () => {
  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <div className=" mb-8">
        <Flex style={{ gap: "20px" }}>
          <Input.Search style={{ width: "40%", marginLeft: "150px" }} />
          <Button type="primary">Add Book</Button>
        </Flex>
      </div>
      <div className=" grid grid-cols-2 gap-2 mt-12 ml-5  ">
        <div className=" grid grid-cols-3  gap-2 m-4 rounded-xl shadow-lg">
          <div className=" col-span-1 m-2 p-2">
            <img
              src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              alt="img"
            />
            <h2 className=" mt-2 font-bold">Lorem, ipsum.</h2>
          </div>
          <div className=" col-span-2 m-2 p-2">
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
              molestias quo perspiciatis itaque vitae minus quod iure sed et, ad
              inventore similique enim accusamus reprehenderit corrupti animi.
              Ad, esse obcaecati....
            </h3>
            <h3 className=" mt-3 font-bold">Frication</h3>
            <div className=" flex gap-4 mt-4">
            <Button type="primary">Edit</Button>
            <Button type="primary" danger>Delete</Button>
            </div>

          </div>
        </div>
        <div className=" grid grid-cols-3  gap-2 m-4 rounded-xl shadow-lg">
          <div className=" col-span-1 m-2 p-2">
            <img
              src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              alt="img"
            />
            <h2 className=" mt-2 font-bold">Lorem, ipsum.</h2>
          </div>
          <div className=" col-span-2 m-2 p-2">
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
              molestias quo perspiciatis itaque vitae minus quod iure sed et, ad
              inventore similique enim accusamus reprehenderit corrupti animi.
              Ad, esse obcaecati....
            </h3>
            <h3 className=" mt-3 font-bold">Frication</h3>
            <div className=" flex gap-4 mt-4">
            <Button type="primary" >Edit</Button>
            <Button type="primary" danger>Delete</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
