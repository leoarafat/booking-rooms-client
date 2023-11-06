"use client";
import ReserveData from "@/components/Services/ReserveData";
import ServiceData from "@/components/Services/ServiceDetails";
import Header from "@/components/layouts/Header";
import { useSingleServiceQuery } from "@/redux/slices/services/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import Heading from "@/utils/Heading";
import { Row, Space, Spin } from "antd";
import dynamic from "next/dynamic";
import React from "react";

const Service = ({ params }: any) => {
  const id = params.id;
  const { data, isLoading, refetch } = useSingleServiceQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const { userId } = getUserInfo() as any;
  return (
    <>
      {isLoading ? (
        <Row
          justify="center"
          align="middle"
          style={{
            height: "100vh",
          }}
        >
          <Space>
            <Spin tip="Loading" size="large"></Spin>
          </Space>
        </Row>
      ) : (
        <Header />
      )}{" "}
      <Heading
        title={data?.propertyName}
        description="HotelHaven"
        keywords={data?.propertyName}
      />
      <ServiceData service={data} id={id} userId={userId} refetch={refetch} />
    </>
  );
};

// export default Service;
export default dynamic(() => Promise.resolve(Service), {
  ssr: false,
});
