import { Col, Layout, Row } from "antd";
import Title from "antd/lib/typography/Title";
import logo from "../../assets/img/logo.svg";
import "./Footer.scss";
import Link from "antd/lib/typography/Link";
import { GithubFilled } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  let regexp = new RegExp("/games/[a-z.]+");

  if (location.pathname.match(regexp)) return <></>;

  return (
    <>
      <Layout.Footer style={{ textAlign: "center" }}>
        <Row justify="space-between" align="middle">
          <Col className="footer_logo">
            <Link href="https://rs.school/react/" target="_blank">
              <img src={logo} alt="logo" />
            </Link>
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
