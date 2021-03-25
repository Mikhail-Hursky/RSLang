import { DownloadOutlined, EditFilled, LoginOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Col, Space, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../authentication_modal/Auth";

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Layout.Header className="">
        <Row justify="space-between">
          <Col>
            <Title type="secondary">
              <Link to="/">RS-Lang</Link>
            </Title>
          </Col>
          <Col>
            <Button
              type="primary"
              shape="round"
              icon={<LoginOutlined />}
              size="middle"
              onClick={() => setIsModalVisible(!isModalVisible)}
            >
              Войти
            </Button>
          </Col>
        </Row>
        <Auth
          visible={isModalVisible}
          setVisible={setIsModalVisible}
        />
      </Layout.Header>
    </>
  );
}
