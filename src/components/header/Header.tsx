import { DownloadOutlined, EditFilled, LoginOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Col, Space, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
              onClick={showModal}
            >
              Войти
            </Button>
          </Col>
        </Row>
      </Layout.Header>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}
