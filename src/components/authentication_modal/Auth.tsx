import { Button, Modal } from "antd";
import React, { useState } from "react";
import Authorization from "../auth_form/Authorization";
import Registration from "../registration_form/Registration";

interface Props {
  visible: boolean;
  setVisible(v: boolean): void;
}

export default function Auth({ visible, setVisible }: Props) {
  const [isLogin, setLogin] = useState(true);
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setLogin(true);
    setVisible(false);
  };
  return (
    <>
      <Modal
        title={isLogin ? "Войти" : "Создать аккаунт"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="auth" type="primary" onClick={() => setLogin(!isLogin)}>
            {isLogin ? "Зарегистрироваться" : "Уже есть аккаунт"}
          </Button>,
          <Button key="closeg" type="primary" danger onClick={handleCancel}>
            Закрыть
          </Button>,
        ]}
      >
        {isLogin ? <Authorization setVisible={setVisible} /> : <Registration />}
      </Modal>
    </>
  );
}
