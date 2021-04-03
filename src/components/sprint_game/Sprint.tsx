import React, { useState } from "react";
import SprintPreload from "./SprintPreloader";
import SprintInstruction from "./SprintInstruction";
import "./Sprint.scss";


export default function Sprint(props:any) {
  const [isStart, setStart] = useState(false);

  return (
    <div className={isStart ? "SprintGame" : "Sprint"}>
      {isStart ? (
        <SprintPreload setStart={setStart} wordsArr={props.location.words}/>
      ) : (
        <SprintInstruction setStart={setStart} />
      )}
    </div>
  );
}
