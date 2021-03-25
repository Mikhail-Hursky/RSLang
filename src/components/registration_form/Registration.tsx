import {
  LockOutlined,
  MailOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";

//@ts-ignore
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export default function Registration() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Пожалуйста введите ваше имя!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Ваше Имя"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Пожалуйста введите ваш email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Ваш E-mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите ваш пароль!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пороль"
        />
      </Form.Item>
      <Form.Item name="avatar" valuePropName="filedata">
        <Upload
          //@ts-ignore
          customRequest={dummyRequest}
          name="logo"
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>
            Щелкните чтобы загрузить ваш аватар
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Зарегистрироваться
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
