import { Button, Space } from "antd";
import React, { useState } from "react";
import { soundFail, soundSuccess } from "../../../sound/sound";
import "./AnswerBtn.scss";

interface Props {
  isReplied: boolean;
  successWord: string;
  words: string[];
  setIsReplied(click: boolean): void;
}

export default function AnswerBtn({
  isReplied,
  setIsReplied,
  successWord,
  words,
}: Props) {
  const handlerClickFail = (e: any) => {
    if (!isReplied) {
      setIsReplied(true);
      soundFail();
      console.log("FAIL");
    }
  };
  const handlerClickSuccess = (e: any) => {
    if (!isReplied) {
      setIsReplied(true);
      soundSuccess();
      console.log("SUCCESS");
    }
  };

  return (
    <>
      <Space className='AnswerBtn'>
        {words.map((word) => {
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
