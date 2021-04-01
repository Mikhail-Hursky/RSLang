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

export default function OurgameInstruction({ setStart }: Props) {
  return (
    <>
      <Title style={style} level={2}>
        НАША ИГРА
      </Title>
      <Title style={style} level={3}>
       Мини-игра «Наша игра» - это тренировка, которая помогает визуализировать английские слова.
      </Title>
      <Paragraph style={style}>
      После запуска игры вы увидите слово на английском языке и четыре варианта изображения. Выбрать правильный ответ можно двумя способами:
      </Paragraph>
      <Paragraph style={style}>1. Кликните по нему мышью.</Paragraph>
      <Paragraph style={style}>2. Используйте клавиши 1, 2, 3, 4.</Paragraph>
      <Button size="large" onClick={() => setStart(true)} type="primary">
        Играть!
      </Button>
    </>
  );
}
