import { LoginOutlined } from "@ant-design/icons";
import { Button, Layout, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";
import Auth from "../authentication_modal/Auth";
import LogOut from "../logOut/LogOut";

export default function Header() {
  const authorization = useSelector((state: State) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Layout.Header>
        <Row justify="space-between">
          <Col>
            <Title type="secondary">
              <Link to="/">RS-Lang</Link>
            </Title>
          </Col>
          <Col>
            {authorization.message === "Authenticated" ? (
              <LogOut name={authorization.name} />
            ) : (
              <Button
                type="primary"
                shape="round"
                icon={<LoginOutlined />}
                size="middle"
                onClick={() => setIsModalVisible(!isModalVisible)}
              >
                Войти
              </Button>
            )}
          </Col>
        </Row>
        <Auth visible={isModalVisible} setVisible={setIsModalVisible} />
      </Layout.Header>
    </>
  );
}
