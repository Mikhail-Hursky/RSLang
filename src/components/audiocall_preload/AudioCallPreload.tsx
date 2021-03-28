import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import AudioCallGame from "../audiocall_game/AudioCallGame";

export default function AudioCallPreload() {
  const [words, setWords] = useState(null);

  useEffect(() => {
    if (!words) {
      Api.getWords(1, 1).then((res: any) => {
        setWords(res);
      });
    }
  }, [words]);

  return (
    <>
      {words ? (
        <AudioCallGame words={words} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
