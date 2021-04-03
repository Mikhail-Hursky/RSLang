import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { soundFail, soundSuccess } from "../../../sound/sound";
import "./AnswerBtn.scss";

interface Props {
  isReplied: boolean;
  successWord: string;
  words: string[];
  setIsReplied(click: boolean): void;
  sound: boolean;
  setStat:any;
  word: any;
  stat: any;
  index:number;
}

export default function AnswerBtn({
  isReplied,
  setIsReplied,
  successWord,
  words,
  sound,
  setStat,
  word,
  stat,
}: Props) {
  const [btn, setBtn] = useState('');

  const handlerClickFail = (e: any) => {
    if (!isReplied) {
      setStat({...stat, failWords: [...stat.failWords, word]});
      setIsReplied(true);
      if (sound) {soundFail();}
    }
  };

  const handlerClickSuccess = (e: any) => {
    if (!isReplied) {
      setStat({...stat, successWords: [...stat.successWords, word]});
      setIsReplied(true);
      if (sound) {soundSuccess();}
    }
  };

  return (
    <>
      <Space className='AnswerBtn'>
        {words.map((word, i) => {
          return word !== successWord ? (
            <Button
            size="large"
              key={word}
              danger={isReplied}
              type="primary"
              onClick={handlerClickFail}
            >
              {word}
            </Button>
          ) : (
            <Button
            size="large"
              className={isReplied ? "Success" : ""}
              key={word}
              type="primary"
              onClick={handlerClickSuccess}
            >
              {word}
            </Button>
          );
        })}
      </Space>
    </>
  );
}
