import { AntDesignOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import "./LogOut.scss";

interface Props {
  name: string;
  //TODO img: string;
}

export default function LogOut({ name }: Props) {
  return (
    <Layout className="LogOut" onClick={() => console.log("CLICK")}>
      <Space>
        <Avatar>icon={<AntDesignOutlined />}</Avatar>
        {name}
        <LogoutOutlined />
      </Space>
    </Layout>
  );
}
