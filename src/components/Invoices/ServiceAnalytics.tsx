"use client";
import { useGetServicesAnalyticsQuery } from "@/redux/slices/services/analyticsApi";
import { styles } from "@/utils/styles";
import { Row, Space, Spin } from "antd";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Label,
  LabelList,
} from "recharts";

type Props = {};

const ServiceAnalytics = (props: Props) => {
  const { data, isLoading, isError } = useGetServicesAnalyticsQuery({});

  const analyticsData: any[] = [];
  if (data) {
    data?.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, uv: item.count });
    });
  }
  const minValue = 0;

  return isLoading ? (
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
    <div className="h-screen">
      <div className="mt-[50px]">
        <h1 className={`${styles.title} px-5 !text-start`}>
          Courses Analytics
        </h1>
        <p className={`${styles.label} px-5`}>Last 12 months analytics data</p>
      </div>
      <div className="w-full h-[90%] flex items-center justify-center">
        <ResponsiveContainer width="90%" height="50%">
          <BarChart width={150} height={300} data={analyticsData}>
            <XAxis dataKey="name">
              <Label offset={0} position="insideBottom" />
            </XAxis>
            <YAxis domain={[minValue, "auto"]} />
            <Bar dataKey="uv" fill="#3faf82">
              <LabelList dataKey="uv" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServiceAnalytics;
