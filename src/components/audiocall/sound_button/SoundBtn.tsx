import React, { useEffect } from "react";
import { URL } from "../../../api/Api";
import volume from "../../../assets/img/volume.png";
import { soundWord } from "../../../sound/sound";

interface Props {
  audio: string[];
  index: number;
}

export default function SoundBtn({ audio, index }: Props) {
  useEffect(() => {
    soundWord(URL + audio[index]);
  }, []);
  return (
    <div className="volume_btn" onClick={() => soundWord(URL + audio[index])}>
      <img src={volume} alt="" />
    </div>
  );
}
