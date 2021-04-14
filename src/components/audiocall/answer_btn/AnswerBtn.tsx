import { Button, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserWords } from "../../../redux/action/userAction";
import { State } from "../../../redux/reducer/rootReducer";
import { soundFail, soundSuccess } from "../../../sound/sound";
import GameCountWords from "../../game_features/GameCountWords";
import "./AnswerBtn.scss";

interface Props {
  isReplied: boolean;
  successWord: string;
  words: string[];
  setIsReplied(click: boolean): void;
  sound: boolean;
  setStat: any;
  word: any;
  stat: any;
  index: number;
  streak: number;
  setStreak: any;
  streakStat: number;
  setStreakStat: any;
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
  setStreakStat,
}: Props) {
  const { userWords, token, userId } = useSelector(
    (state: State) => state.user
  );
  const dispatch = useDispatch();

  const wordCount = word["id"] || word["_id"];

  const handlerClickFail = (e: any) => {
    if (!isReplied) {
      GameCountWords(userWords, wordCount, true, token, userId);
      if (streak > streakStat) {
        setStreakStat(streak);
      }
      setStreak(0);
      setStat({ ...stat, failWords: [...stat.failWords, word] });
      setIsReplied(true);
      if (sound) {
        soundFail();
      }
      dispatch(setUserWords(token, userId));
    }
  };


  const handlerClickSuccess = (e: any) => {
    if (!isReplied) {
      GameCountWords(userWords, wordCount, false, token, userId);
      setStreak(streak + 1);
      setStat({ ...stat, successWords: [...stat.successWords, word] });
      setIsReplied(true);
      if (sound) {
        soundSuccess();
      }
      dispatch(setUserWords(token, userId));
    }
  };

  return (
    <>
      <Space className="AnswerBtn">
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
