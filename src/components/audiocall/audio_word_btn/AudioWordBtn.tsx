import { SoundTwoTone } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import { soundWord } from "../../../sound/sound";
import { URL } from "../../../api/Api";

interface Props {
  audio: string;
  text: string;
}

export default function AudioWordBtn({ audio, text }: Props) {
    
  const handleClick = () => {
    soundWord(URL + audio);
  };

  return (
    <Space>
      <SoundTwoTone onClick={handleClick} />
      {text}
    </Space>
  );
}
