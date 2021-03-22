import { DownloadOutlined, EditFilled, LoginOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Col, Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Layout.Header className="">
        <Row>
          <Col span={3}>
            <Title type="secondary">
              <Link to="/">RS-Lang</Link>
            </Title>
          </Col>
          <Col span={4} offset={17}>
            <Space>
              <Button
                type="primary"
                shape="round"
                icon={<LoginOutlined />}
                size="large"
              >
                Войти
              </Button>
              <Button
                type="primary"
                shape="round"
                icon={<EditFilled />}
                size="large"
              >
                Регистрация
              </Button>
            </Space>
          </Col>
        </Row>
      </Layout.Header>
    </>
  );
}

/* <div className="wrap-header">
        <h1>RS Lang</h1>
        <div className="header-buttons">
          <div>
            <button>войти</button>
          </div>
          <div>
            <button>регистрация</button>
          </div>
        </div>
      </div> */
