import React from "react";
import "./AudioCallGame.scss";
import volume from "../../assets/img/volume.png";

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
  if (words) {
    console.log(words[1]);
  }

  return (
    <>
      <div className="volume_btn">
        <img src={volume} alt="" />
      </div>
    </>
  );
}
