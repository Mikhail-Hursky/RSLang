import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import shuffle from "../../shuffle";
import SprintGame from "./SprintGame";

interface Props {
  setStart(isStart: boolean): void;
  wordsArr: Array<any>;
}

export default function SprintPreload({ setStart, wordsArr }: Props) {
  const [words, setWords] = useState<any>(null);

  useEffect(() => {
    if (!words && !wordsArr) {
      Api.getWords(1, 1).then((res: any) => {
        setWords(res);
      });
    } else if (!words) {
      setWords(wordsArr);
    }
  }, [words]);

  return (
    <>
      {words ? (
        <SprintGame setStart={setStart} words={shuffle(words)} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
