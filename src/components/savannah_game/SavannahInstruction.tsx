import { Button } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React from "react";

interface Props {
  setStart(isStart: boolean): void;
}

const style = {
    color: "#f6ffed",
  };

export default function SavannahInstruction({ setStart }: Props) {
  return (
    <>
      <Title style={style} level={2}>
        Саванна
      </Title>
      <Title style={style} level={3}>
        Мини-игра «Саванна» - это тренировка по переводу пассивного изученного словаря в активную стадию.
      </Title>
      <Paragraph style={style}>
      После запуска игры вы увидите падающее слово на английском и четыре варианта перевода. Выбрать правильный ответ можно двумя способами:
      </Paragraph>
      <Paragraph style={style}>1. Кликните по нему мышью.</Paragraph>
      <Paragraph style={style}>2. Используйте клавиши 1, 2, 3, 4.</Paragraph>
      <Button size="large" onClick={() => setStart(true)} type="primary">
        Играть!
      </Button>
    </>
  );
}
