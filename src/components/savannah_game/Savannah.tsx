import React, { useEffect, useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import { botBg } from "../../redux/action/gameAction";
import SavannahPreload from "./SavannahPreloader";
import SavannahInstruction from "./SavannahInstruction";
import "./Savannah.scss";


export default function Savannah(props:any) {
  
  const dispatch = useDispatch();
  const [isStart, setStart] = useState(false);
  const { position } = useSelector((state: State) => state.savannah);

  useEffect(() => {
    dispatch(botBg());
  }, [isStart]);

  return (
    <div className={isStart ? "SavannahGame" : "Savannah"} style={isStart ? {backgroundPositionY: `${position}%`} : {}}>
      {isStart ? (
        <SavannahPreload setStart={setStart} wordsArr={props.location.words} />
      ) : (
        <SavannahInstruction setStart={setStart} />
      )}
    </div>
  );
}
