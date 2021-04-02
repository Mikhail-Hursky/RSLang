import React, { useState } from "react";
import AudioCallPreload from "./audiocall_preload/AudioCallPreload";
import InstructionAudioCall from "./instruction_audiocall/InstructionAudioCall";
import "./AudioCall.scss";

export default function AudioCall(props:any) {
  const [isStart, setStart] = useState(false);

  return (
    <div className={isStart ? "AudioCallGame" : "AudioCall"}>
      {isStart ? (
        <AudioCallPreload wordsArr={props.location.words} />
      ) : (
        <InstructionAudioCall setStart={setStart} />
      )}
    </div>
  );
}
