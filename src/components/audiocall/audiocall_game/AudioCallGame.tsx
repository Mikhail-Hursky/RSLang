import React, { useLayoutEffect, useState } from "react";
import "./AudioCallGame.scss";
import SoundBtn from "../sound_button/SoundBtn";
import AnswerBtn from "../answer_btn/AnswerBtn";
import { Button } from "antd";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import ImageAnswer from "../image_answer/ImageAnswer";

interface Word {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}
interface Props {
  words: Word[];
}

export default function AudioCallGame({ words }: Props) {
  const [audio] = useState(words.map((word) => word.audio));
  const [word] = useState(words.map((word) => word.wordTranslate));
  const [index, setIndex] = useState(0);
  const [arrFailBtnAnswer, setArrAnswer] = useState([...word]);
  const [isReplied, setIsReplied] = useState(false);
  useLayoutEffect(() => {
    let arr = word
      .filter((w) => w !== word[index])
      .sort((a, b) => Math.random() - 0.5)
      .slice(0, 4);
    arr.push(word[index]);
    arr.sort((a, b) => Math.random() - 0.5);
    setArrAnswer(arr);
  }, [index]);

  const handleClick = () => {
    if (!isReplied) {
      setIsReplied(true);
    } else {
      if (index < 10) {
        setIndex(index + 1);
        setIsReplied(false);
      } else {
        console.log("FINISHED");
      }
    }
  };

  return (
    <>
      {isReplied ? (
        <ImageAnswer
          audio={words[index].audio}
          image={words[index].image}
          word={words[index].word}
          audioExample={words[index].audioExample}
          audioMeaning={words[index].audioMeaning}
          transcription={words[index].transcription}
          textExample={words[index].textExample}
          textMeaning={words[index].textMeaning}
        />
      ) : (
        <SoundBtn audio={audio} index={index} />
      )}
      <AnswerBtn
        isReplied={isReplied}
        setIsReplied={setIsReplied}
        successWord={word[index]}
        words={arrFailBtnAnswer}
      />
      <Button
        onClick={handleClick}
        type="primary"
        danger={!isReplied}
        size="large"
      >
        {isReplied ? <ArrowRightOutlined /> : <CloseOutlined />}
      </Button>
    </>
  );
}
