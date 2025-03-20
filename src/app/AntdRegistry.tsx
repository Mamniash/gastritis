"use client";

import React from "react";
import { ConfigProvider, App } from "antd";

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#934a3a",
          colorLink: "#934a3a",
          colorSuccess: "#538847",
          colorBgBase: "#f7f7f6",
          fontFamily: "'Poppins', sans-serif",
          borderRadius: 8,
        },
        components: {
          Button: {
            borderRadius: 50,
          },
          Input: {
            borderRadius: 50,
          },
          Card: {
            borderRadius: 12,
          },
        },
      }}
    >
      <App>{children}</App>{" "}
      {/* Оборачиваем всё в App, чтобы поддерживать уведомления */}
    </ConfigProvider>
  );
};

export default AntdProvider;
