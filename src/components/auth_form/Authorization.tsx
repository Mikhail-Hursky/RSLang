import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Api } from "../../api/Api";
import { authorization } from "../../redux/action/userAction";

interface Props {
  setVisible(v: boolean): void;
}

export default function Authorization({ setVisible }: Props) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async function (values: any) {
    const { email, password } = values;
    const res: any = await Api.auth(email, password);
    if (res.status === 200) {
      const { message, name, token, userId } = res;
      dispatch(authorization({ message, name, token, userId }));
      setVisible(false);
    } else {
      message.error(res.message);
    }
  };

  return (
    <Form form={form} name="horizontal_login" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Пожалуйста введите ващ email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="E-mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите ваш пароль!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
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
            Войти
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
