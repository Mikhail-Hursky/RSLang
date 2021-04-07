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
  const [isLoading, setLoading] = useState(false);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async function (values: any) {
    setLoading(true);
    const { email, password } = values;
    const res: any = await Api.auth(email, password);
    if (res.status === 200) {
      const { message, name, token, userId } = res;
      const stat = await Api.getUserStat(userId, token);
      console.log(stat);
      
      if (stat.status === 404)
        console.log(Api.setUserStat(token, userId, 0, {
          Sprint: -1,
          Savannah: -1,
          Our: -1,
          Audiocall: -1,
        }, {
          Sprint: 0,
          Savannah: 0,
          Our: 0,
          Audiocall: 0,
        }));
      const words: any = await Api.getAllUserWord(token, userId);
      if (words.status === 200) {
        const { data } = words;

        dispatch(
          authorization({ message, name, token, userId, userWords: data })
        );
        setVisible(false);
        setLoading(false);
        form.resetFields();
      }
    } else {
      message.error(res.message);
      setLoading(false);
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
        rules={[
          {
            required: true,
            message: "Пожалуйста введите ваш пароль!",
          },
        ]}
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
            loading={isLoading}
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
