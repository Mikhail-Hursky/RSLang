import React from "react";
import "./AudioCallGame.scss";

import { soundFail, soundSuccess, soundWord } from "../../../sound/sound";
import SoundBtn from "../sound_button/SoundBtn";
import shuffle from "../../../shuffle";

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
  words: Word[] | null;
}

export default function AudioCallGame({ words }: Props) {
  let arr;
  if (words) {
    arr = shuffle(words);
    console.log(arr);
    arr = arr.map((obj: Word) => {
      const { audio, wordTranslate } = obj;
    });
    console.log(arr);
  }

  return (
    <>
      <SoundBtn />
    </>
  );
}
