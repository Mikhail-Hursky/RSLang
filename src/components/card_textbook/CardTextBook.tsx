import {
  DeleteOutlined,
  FrownOutlined,
  HighlightOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Space } from "antd";
import "./CardTextBook.scss";

export default function CardTextBook() {
  return (
    <div className="CardTextBook">
      <Space>
        <Avatar size={64} icon={<UserOutlined />} />
        <Button type="primary" shape="circle" icon={<SoundOutlined />} />
        <div className="CardTextBook_word">
          <p>WORD</p>
          <p>TRANSLATE</p>
        </div>
      </Space>
      <Space>
        <Button
          type="primary"
          shape="circle"
          icon={<HighlightOutlined />}
        ></Button>
        <Button
          danger
          type="primary"
          shape="circle"
          icon={<DeleteOutlined />}
        ></Button>
        <Button type="primary" shape="circle" icon={<FrownOutlined />}></Button>
      </Space>
    </div>
  );
}
