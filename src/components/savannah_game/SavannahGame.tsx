import React, {useEffect, useState} from "react";
import "./SavannahGame.scss";
import { Tooltip, Progress, Button } from 'antd';
import {Word, Props} from "../../interfaces/Words"
import { soundSuccess, soundFail, soundWord } from "../../sound/sound";

function shuffle(arr: Array<number>){
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

function randomInteger(min:number, max:number) {
 let rand = min - 0.5 + Math.random() * (max - min + 1);
 return Math.round(rand);
}

export default function SavannahGame({ words }: Props) {
 
 const [wordClass, setWordClass] = useState('savannah_word');
 
 const wordsNums = [];
 wordsNums.push(randomInteger(0,19));
 wordsNums.push(randomInteger(0,19));
 wordsNums.push(randomInteger(0,19));
 wordsNums.push(randomInteger(0,19));
 if(words !== null) {
  console.log(words);
 }

 function handlerClick(event: {target: EventTarget}) {
  console.log(event.target);
  soundSuccess();
 }

  useEffect(()=>{
   
   
     setTimeout(()=> {
      setWordClass("savannah_word savannah_word_fall");
     }, 500);
     
  }, []);


  return (
    <>
      <div className={wordClass}>
        <h2>{words ? words[wordsNums[0]]["word"] : ''}</h2>
      </div>
      <div className="savannah_progress">
      <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress strokeColor={{'0%': '#f61c1c',
        '100%': '#f61c1c',}} percent={60} success={{ percent: 30 }} />
      </Tooltip>
      </div>
      <div className="choose_word_btn">
       {wordsNums.map((e,i)=> {
        return (
          <Button key={i} onClick={handlerClick}>{words ? words[e]["wordTranslate"] : ''}</Button>  
        )
       })}
      </div>
    </>
  );
}
