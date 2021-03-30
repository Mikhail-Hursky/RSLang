import React, {useEffect, useState} from "react";
import "./SavannahGame.scss";
import {  Button, Spin } from "antd";
import {Props} from "../../interfaces/Words"
import { soundSuccess, soundFail } from "../../sound/sound";
import SavannahWord from "./SavannahWord";
import ProgressBar from "./SavannahProgress";
import { useDispatch } from "react-redux";
import { topBg } from "../../redux/action/gameAction";

function randomInteger(min:number, max:number) {
 let rand = min - 0.5 + Math.random() * (max - min + 1);
 return Math.round(rand);
}

function setRandomIndexWords(min:number, max:number) {
 const wordsNums:Array<number> = [];
 for (let i=0; i<=3; i++) {
  const random = Math.abs(randomInteger(min,max));
  if (!wordsNums.includes(random)) {
   wordsNums.push(random);
  } else {
   i--;
  }
 }
 return wordsNums;
}

export default function SavannahGame({ words }: Props) {
 const dispatch = useDispatch();
 const [state, setState] = useState<any>({
  wordsBtns: [{'wordTranslate': 'undefined'}],
  word: {'word': 'undefined'},
  SuccessWords: [],
  FailWords: [],
  click: true
 });

 let timer:any;

 function handlerClick(event: any) {
  console.log(timer);
  if (words) {
   if (event.target.innerText === state.word['wordTranslate']) {
    soundSuccess();
      setState({ ...state,
       SuccessWords: [...state.SuccessWords, state.word],
       click: true
      });
      dispatch(topBg());
   } else {
    soundFail();
     setState({ ...state,
      FailWords: [...state.FailWords, state.word],
      click: true
     });
   }
  }
 }

 function fail() {
  if (words) {
     soundFail();
     setState({ ...state,
      FailWords: [...state.FailWords, state.word],
      click: true
     });
    }
 }

  useEffect(()=>{
    if (state.click && words) {
     let wordsArr = words.filter(e=> {
      if (!state.SuccessWords.concat(state.FailWords).includes(e)) {return e}
     })
     let array = setRandomIndexWords(0, wordsArr.length-1);
     let random = Math.abs(randomInteger(0,3));
     setTimeout(()=> setState({...state, 
       wordsBtns: array.map(e=> wordsArr[e]),
       word: wordsArr[array[random]],
      click:false
     }), 1000);
     //timer = setTimeout(fail, 5000); 
    }
  }, [state]);

  useEffect(() => {
   console.log('useee')
  }, [state]);
  console.log(state);

  return (
    <>
      <div>
        {state.wordsBtns.length !== 0 && words && !state.click ? <SavannahWord word={state.word['word']} click={state.click}/> : <Spin size="large" />}
      </div>
      <div className="savannah_progress">
      <ProgressBar data={[state.SuccessWords.length, state.FailWords.length]} />
      </div>
      <div className="choose_word_btn">
       {state.wordsBtns.length !== 0 && words ? state.wordsBtns.map((e:any, i:any)=> {
        return (
          <Button disabled={state.click} key={i} onClick={handlerClick} >{e["wordTranslate"]}</Button>  
        )
       }) : <Spin size="large" />}
      </div>
    </>
  );
}
