import React, { useState } from "react";
import OurgamePreload from "./OurgamePreloader";
import OurgameInstruction from "./OurgameInstruction";
import "./Ourgame.scss";


export default function Ourgame() {
  const [isStart, setStart] = useState(false);

  return (
    <div className={isStart ? "OurgameGame" : "Ourgame"} >
      {isStart ? (
        <OurgamePreload setStart={setStart} />
      ) : (
        <OurgameInstruction setStart={setStart} />
      )}
    </div>
  );
}
