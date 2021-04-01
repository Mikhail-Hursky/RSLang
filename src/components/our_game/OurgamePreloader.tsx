import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import shuffle from "../../shuffle";
import OurgameGame from "./OurgameGame";

interface Props {
  setStart(isStart: boolean): void;
}

export default function OurgamePreload({ setStart }: Props) {
  const [words, setWords] = useState<any>(null);

  useEffect(() => {
    if (!words) {
      Api.getWords(1, 1).then((res: any) => {
        setWords(shuffle(res));
      });
    }
  }, [words]);

  return (
    <>
      {words ? (
        <OurgameGame setStart={setStart} words={words} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
