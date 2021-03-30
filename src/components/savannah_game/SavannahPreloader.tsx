import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import shuffle from "../../shuffle";
import SavannahGame from "./SavannahGame";

export default function SavannahPreload() {
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
        <SavannahGame words={words} />
      ) : (
        <Spin tip="Загрузка..." size="large" />
      )}
    </>
  );
}
