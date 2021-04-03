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

export default function SprintInstruction({ setStart }: Props) {
  return (
    <>
      <Title style={style} level={2}>
      СПРИНТ
      </Title>
      <Title style={style} level={3}>
      Мини-игра «Спринт» - это тренировка для повторения заученных слов из вашего словаря.
      </Title>
      <Paragraph style={style}>
      После запуска игры вы увидите слово и перевод. Вам нужно выбрать, правильно это или неправильно. Выбрать правильный ответ можно двумя способами:
      </Paragraph>
      <Paragraph style={style}>1. Используйте мышь, чтобы выбрать.</Paragraph>
      <Paragraph style={style}>2. Используйте клавиши влево и вправо.</Paragraph>
      <Button size="large" onClick={() => setStart(true)} type="primary">
        Играть!
      </Button>
    </>
  );
}
