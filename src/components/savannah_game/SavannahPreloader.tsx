import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import shuffle from "../../shuffle";
import SavannahGame from "./SavannahGame";

interface Props {
  setStart(isStart: boolean): void;
  wordsArr: Array<any>;
}

export default function SavannahPreload({ setStart, wordsArr }: Props) {
  const [words, setWords] = useState<any>(null);

  useEffect(() => {
    console.log(wordsArr);
    setWords(wordsArr);
}, [words]);

  return (
    <>
      {words ? (
        <SavannahGame setStart={setStart} words={shuffle(words)} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
