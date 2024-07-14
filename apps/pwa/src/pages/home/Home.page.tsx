import { Button, Flex, Input,  Select, Tag, Typography } from "antd";
import React from "react";
import Card from "@/components/card";

export const Home: React.FC = () => {
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
      <div className=" flex gap-4">
        <Card className=" w-40 flex flex-col">
          <img
            src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="img"
            className=" mb-2"
          />
          <div className=" flex flex-col justify-start">
            <Typography.Text>Lorem ipsum dolor sit amet.</Typography.Text>
            <Typography.Text style={{ marginLeft: "0px", fontWeight: "bold" }}>
              Lorem
            </Typography.Text>
          </div>
        </Card>
        <Card className=" w-40 flex flex-col">
          <img
            src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="img"
            className=" mb-2"
          />
          <div className=" flex flex-col justify-start">
            <Typography.Text>Lorem ipsum dolor sit amet.</Typography.Text>
            <Typography.Text style={{ marginLeft: "0px", fontWeight: "bold" }}>
              Lorem
            </Typography.Text>
          </div>
        </Card>
        <Card className=" w-40 flex flex-col">
          <img
            src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="img"
            className=" mb-2"
          />
          <div className=" flex flex-col justify-start">
            <Typography.Text>Lorem ipsum dolor sit amet.</Typography.Text>
            <Typography.Text style={{ marginLeft: "0px", fontWeight: "bold" }}>
              Lorem
            </Typography.Text>
          </div>
        </Card>
        <Card className=" w-40 flex flex-col">
          <img
            src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="img"
            className=" mb-2"
          />
          <div className=" flex flex-col justify-start">
            <Typography.Text>Lorem ipsum dolor sit amet.</Typography.Text>
            <Typography.Text style={{ marginLeft: "0px", fontWeight: "bold" }}>
              Lorem
            </Typography.Text>
          </div>
        </Card>
        <Card className=" w-40 flex flex-col">
          <img
            src="https://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="img"
            className=" mb-2"
          />
          <div className=" flex flex-col justify-start">
            <Typography.Text>Lorem ipsum dolor sit amet.</Typography.Text>
            <Typography.Text style={{ marginLeft: "0px", fontWeight: "bold" }}>
              Lorem
            </Typography.Text>
          </div>
        </Card>
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
            <h3 >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, molestias quo perspiciatis itaque vitae minus quod iure sed et, ad inventore similique enim accusamus reprehenderit corrupti animi. Ad, esse obcaecati....</h3>
            <Tag bordered={false} color="success" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px",fontSize:"15px",marginTop:"10px"}}>
        success
      </Tag>          </div>

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
            <h3 >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, molestias quo perspiciatis itaque vitae minus quod iure sed et, ad inventore similique enim accusamus reprehenderit corrupti animi. Ad, esse obcaecati....</h3>
            <Tag bordered={false} color="success" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px",fontSize:"15px",marginTop:"10px"}}>
        success
      </Tag>
          </div>

        </div>
        
      </div>
      
    </div>
  );
};
