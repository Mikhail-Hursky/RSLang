import React, { useState } from "react";
import SavannahPreload from "./SavannahPreloader";
import SavannahInstruction from "./SavannahInstruction";
import "./Savannah.scss";

export default function Savannah() {
  const [isStart, setStart] = useState(false);

  return (
    <div className={isStart ? "SavannahGame" : "Savannah"}>
      {isStart ? (
        <SavannahPreload />
      ) : (
        <SavannahInstruction setStart={setStart} />
      )}
    </div>
  );
}
