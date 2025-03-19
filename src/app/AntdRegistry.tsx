'use client';

import React from 'react';
import { ConfigProvider, theme } from 'antd';

// Настраиваем темы Ant Design с использованием нашей цветовой схемы
const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#934a3a',
          colorLink: '#934a3a',
          colorSuccess: '#538847',
          colorBgBase: '#f7f7f6',
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
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
