import {
  LockOutlined,
  MailOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, message, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";

//@ts-ignore
const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export default function Registration() {
  const [form] = Form.useForm();
  const [isLoading, setLoading] = useState(false);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async function (values: any) {
    setLoading(true);
    const { name, email, password } = values;
    const res: any = await Api.registration(name, email, password);
    if (res.status === 200) {
      message.success("Регистрация прошла успешна!");
      form.resetFields();
      setLoading(false);
    } else {
      message.error(res.message);
      form.resetFields();
      setLoading(false);
    }
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Пожалуйста, введите ваше имя!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Ваше Имя"
        />
      </Form.Item>
      <Form.Item
        shouldUpdate={true}
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Пожалуйста, введите ваш email!",
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
        rules={[{ required: true, message: "Пожалуйста, введите ваш пароль!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item name="avatar" valuePropName="filedata">
        <Upload
          //@ts-ignore
          customRequest={dummyRequest}
          name="logo"
          listType="picture"
          maxCount={1}
          rules={[{ required: false }]}
        >
          <Button icon={<UploadOutlined />}>
            Щелкните чтобы загрузить ваш аватар
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            disabled={
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
