import { Col, Row, Space } from "antd";

import AreaDownload from "./area-download";
import BannerCard from "./banner-card";
import { Applications, Conversion } from "./conversion_applications";
import CurrentDownload from "./current-download";
import TopAuthor from "./top-authors";
import TotalCard from "./total-card";
import { trpc } from "@/trpc/trpc";

export function Workbench() {
  const users = trpc.getAllUsers.useQuery();
  console.log(users.data);

  return (
    <div className="p-2">
      <Row gutter={[16, 16]} justify="center">
        <Col span={24} lg={16}>
          <BannerCard />
        </Col>
        <Col span={24} lg={8}>
          <Space
            direction="vertical"
            size="large"
            className="h-full w-full justify-center"
          >
            <Conversion />
            <Applications />
          </Space>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-4" justify="center">
        <Col span={24} md={8}>
          <TotalCard
            title="Total Users"
            increase
            count={users?.data?.length.toString() ?? "7"}
            percent="2.6%"
            chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
          />
        </Col>

        <Col span={24} md={8}>
          <TotalCard
            title="Total Books Borroed Today"
            increase
            count="68"
            percent="0.2%"
            chartData={[45, 52, 38, 24, 33, 26, 21, 20, 6]}
          />
        </Col>

        <Col span={24} md={8}>
          <TotalCard
            title="Total Books Returned Today"
            increase={false}
            count="30"
            percent="0.1%"
            chartData={[35, 41, 62, 42, 13, 18, 29, 37, 36]}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-4" justify="center">
        <Col span={24} md={12} lg={8}>
          <CurrentDownload />
        </Col>
        <Col span={24} md={12} lg={16}>
          <AreaDownload />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mt-4" justify="center">
        <Col span={24} md={24}>
          <TopAuthor />
        </Col>
      </Row>
    </div>
  );
}
