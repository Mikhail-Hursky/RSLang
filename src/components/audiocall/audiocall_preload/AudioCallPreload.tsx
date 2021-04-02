import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import shuffle from "../../../shuffle";
import AudioCallGame from "../audiocall_game/AudioCallGame";

interface Props {
  wordsArr: Array<any>;
}

export default function AudioCallPreload({wordsArr}: Props) {
  const [words, setWords] = useState<any>(null);

  useEffect(() => {
    if (!words && !wordsArr) {
      Api.getWords(1, 1).then((res: any) => {
        setWords(res);
      });
    } else if (!words){
      setWords(wordsArr);
    }
  }, [words]);

  return (
    <>
      {words ? (
        <AudioCallGame words={shuffle(words)} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
