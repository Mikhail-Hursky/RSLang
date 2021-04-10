import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import shuffle from "../../../shuffle";
import AudioCallGame from "../audiocall_game/AudioCallGame";

interface Props {
  wordsArr: Array<any>;
  setStart: any;
}

export default function AudioCallPreload({wordsArr, setStart}: Props) {
  const [words, setWords] = useState<any>(null);

  useEffect(() => {
    setWords(wordsArr);
}, [words]);

  return (
    <>
      {words ? (
        <AudioCallGame setStart={setStart} words={shuffle(words)} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
