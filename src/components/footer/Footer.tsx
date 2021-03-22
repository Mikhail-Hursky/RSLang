import { Col, Layout, Row } from "antd";
import Title from "antd/lib/typography/Title";
import logo from "../../assets/img/logo.svg";
import "./Footer.scss";
import Link from "antd/lib/typography/Link";
import { GithubFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <Layout.Footer style={{ textAlign: "center" }}>
        <Row justify="space-between" align="middle">
          <Col className="footer_logo">
            <img src={logo} alt="logo" />
          </Col>
          <Col>
            <Link href="https://github.com/fedorovichpavel" target="_blank">
              <GithubFilled />
              Pavel Fedorovich
            </Link>
          </Col>
          <Col>
            <Link href="https://github.com/Mikhail-Hursky" target="_blank">
              <GithubFilled />
              Mikhail Hursky
            </Link>
          </Col>
          <Col>
            <Link href="https://github.com/mig-marina" target="_blank">
              <GithubFilled />
              Marina Migacheva
            </Link>
          </Col>
          <Col>
            <Title level={2}>2021</Title>
          </Col>
        </Row>
      </Layout.Footer>
    </>
  );
}
