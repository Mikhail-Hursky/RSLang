import { SoundTwoTone } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { URL } from "../../../api/Api";
import { soundWord } from "../../../sound/sound";
import AudioWordBtn from "../audio_word_btn/AudioWordBtn";
import "./ImageAnswer.scss";

interface Props {
  audio: string;
  image: string;
  word: string;
  audioExample: string;
  audioMeaning: string;
  transcription: string;
  textExample: string;
  textMeaning: string;
}

export default function ImageAnswer({
  audio,
  image,
  word,
  audioExample,
  audioMeaning,
  transcription,
  textExample,
  textMeaning,
}: Props) {
  const handleClick = () => {
    soundWord(URL + audio);
  };
  return (
    <div className="ImageAnswer">
      <Avatar
        style={{ width: "200px", height: "200px" }}
        icon={<img src={URL + image} alt={word} />}
      />
      <Space>
        <SoundTwoTone onClick={handleClick} />
        <Title level={3}>{word}</Title>
      </Space>

      <Title level={3}>{transcription}</Title>
      <AudioWordBtn audio={audioExample} text={textExample} />
      <AudioWordBtn audio={audioMeaning} text={textMeaning} />
    </div>
  );
}
