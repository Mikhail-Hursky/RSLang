import { AntDesignOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Popconfirm, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/action/userAction";
import "./LogOut.scss";

interface Props {
  name: string;
  //TODO img: string;
}

export default function LogOut({ name }: Props) {
  const dispatch = useDispatch();
  return (
    <Popconfirm
      title="Вы действительно хотите выйти?"
      onConfirm={() => dispatch(logOut())}
      okText="Да"
      cancelText="Нет"
    >
      <Layout className="LogOut">
        <Space>
          <Avatar>icon={<AntDesignOutlined />}</Avatar>
          {name}
          <LogoutOutlined />
        </Space>
      </Layout>
    </Popconfirm>
  );
}
