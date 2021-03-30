import React, { useEffect } from "react";
import volume from "../../../assets/img/volume.png";
import { soundFail } from "../../../sound/sound";

export default function SoundBtn() {
  useEffect(() => {
    setTimeout(() => soundFail(), 500);
  });
  return (
    <div className="volume_btn" onClick={() => soundFail()}>
      <img src={volume} alt="" />
    </div>
  );
}
