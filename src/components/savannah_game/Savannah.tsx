import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import SavannahPreload from "./SavannahPreloader";
import SavannahInstruction from "./SavannahInstruction";
import "./Savannah.scss";

export default function Savannah() {
  const [isStart, setStart] = useState(false);
  const { position } = useSelector((state: State) => state.savannah);
  return (
    <div className={isStart ? "SavannahGame" : "Savannah"} style={isStart ? {backgroundPositionY: `${position}%`} : {}}>
      {isStart ? (
        <SavannahPreload />
      ) : (
        <SavannahInstruction setStart={setStart} />
      )}
    </div>
  );
}
