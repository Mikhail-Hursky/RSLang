import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import shuffle from "../../shuffle";
import OurgameGame from "./OurgameGame";

interface Props {
  setStart(isStart: boolean): void;
  wordsArr: Array<any>;
}

export default function OurgamePreload({ setStart, wordsArr }: Props) {
  const [words, setWords] = useState<any>(null);

  useEffect(() => {
      setWords(wordsArr);
  }, [words]);

  return (
    <>
      {words ? (
        <OurgameGame setStart={setStart} words={shuffle(wordsArr)} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
