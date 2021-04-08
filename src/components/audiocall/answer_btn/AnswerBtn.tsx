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
  streak:number;
  setStreak:any;
  streakStat:number;
  setStreakStat:any;
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
  streak,
  setStreak,
  streakStat,
  setStreakStat
}: Props) {
  const [btn, setBtn] = useState('');

  const handlerClickFail = (e: any) => {
    if (!isReplied) {
      if (streak > streakStat) {setStreakStat(streak); } 
    setStreak(0);
      setStat({...stat, failWords: [...stat.failWords, word]});
      setIsReplied(true);
      if (sound) {soundFail();}
    }
  };

  const handlerClickSuccess = (e: any) => {
    if (!isReplied) {
      setStreak(streak+1);
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
