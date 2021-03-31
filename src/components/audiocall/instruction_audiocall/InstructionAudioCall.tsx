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

export default function InstructionAudioCall({ setStart }: Props) {
  return (
    <>
      <Title style={style} level={2}>
        Аудиовызов
      </Title>
      <Title style={style} level={3}>
        Мини-игра «Аудиовызов» - это тренировка, развивающая навыки речи и
        перевода.
      </Title>
      <Paragraph style={style}>
        Вы слышите слово и видите 5 вариантов перевода. Выбрать правильный ответ
        можно двумя способами:
      </Paragraph>
      <Paragraph style={style}>1. Кликните по нему мышью.</Paragraph>
      <Paragraph style={style}>2. Используйте клавиши 1, 2, 3, 4, 5.</Paragraph>
      <Button size="large" onClick={() => setStart(true)} type="primary">
        Играть!
      </Button>
    </>
  );
}
