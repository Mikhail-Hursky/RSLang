import React, {useEffect, useState} from "react";
import "./SavannahGame.scss";
import {  Button, Spin, Switch } from "antd";
import {Props} from "../../interfaces/Words"
import { soundSuccess, soundFail } from "../../sound/sound";
import SavannahWord from "./SavannahWord";
import ProgressBar from "../game_features/GameProgress";
import { useDispatch, useSelector } from "react-redux";
import { topBg, sound } from "../../redux/action/gameAction";
import StatisticModal from "../statisticModal/StatisticModal";
import SavannahLifes from "../game_features/GameLifes";
import { State } from "../../redux/reducer/rootReducer";
import { FullscreenOutlined } from "@ant-design/icons";
import FullscreenGame from "../fullscreen_game/FullscreenGame";

const preloaderStyle:React.CSSProperties = {
  position: 'absolute',
     top: '26%',
     left: 'calc((100% - 370px) / 2)',
   width: '450px'
 }

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

export default function SavannahGame({ words, setStart }: Props) {
 const dispatch = useDispatch();
 const soundState = useSelector((state: State) => state.savannah.sound);
 const [state, setState] = useState<any>({
  wordsBtns: [{'wordTranslate': ' '}, {'wordTranslate': ' '}, {'wordTranslate': ' '}, {'wordTranslate': ' '}],
  word: {'word': 'undefined'},
  SuccessWords: [],
  FailWords: [],
  click: true,
  sound: true
 });
 const [streak, setStreak] = useState(0);
 const [streakStat, setStreakStat] = useState(0);

 function handlerClick(target: any) {
  if (words) {
   if (target === state.word['wordTranslate']) {
    setStreak(streak+1);
      if(soundState) {soundSuccess();}
      setState({ ...state,
       SuccessWords: [...state.SuccessWords, state.word],
       click: true
      });
      dispatch(topBg());
   } else {
    if (streak > streakStat) {setStreakStat(streak); } 
    setStreak(0);
    if(soundState) {soundFail();}
     setState({ ...state,
      FailWords: [...state.FailWords, state.word],
      click: true
     });
   }
  }
 }

 function handlerKey(event: any) {
  if (!state.click) {
  switch( event.key) {
    case '1':
      handlerClick(state.wordsBtns[0]['wordTranslate']);
         break;
    case '2':
      handlerClick(state.wordsBtns[1]['wordTranslate']);
         break;
     case '3':
      handlerClick(state.wordsBtns[2]['wordTranslate']);
         break;
    case '4':
      handlerClick(state.wordsBtns[3]['wordTranslate']);
         break;
     default:
         break;
 }
}
 }

 function fail() {
  if (words) {
    if(soundState) {soundFail();}
     setState({ ...state,
      FailWords: [...state.FailWords, state.word],
      click: true
     });
    }
 }

  useEffect(()=>{
    if (state.click && words && (state.SuccessWords.length + state.FailWords.length !== words.length-4) && state.FailWords.length !== 5) {
     let wordsArr = words.filter(e=> {
      if (!state.SuccessWords.concat(state.FailWords).includes(e)) {return e}
     })
     let array = setRandomIndexWords(0, wordsArr.length-1);
     let random = Math.abs(randomInteger(0,3));
     setTimeout(()=> setState({...state, 
       wordsBtns: array.map(e=> wordsArr[e]),
       word: wordsArr[array[random]],
      click:false
     }), 1500);
    }
    document.addEventListener("keypress", handlerKey);
    return () => document.removeEventListener("keypress", handlerKey);
  }, [state]);

  return (
    <>
      <div> 
        <SavannahLifes data={state.FailWords.length}/> 
        <div className="savannah_sound_switch">
        <SvgSound className="savannah_sound_svg" soundState={soundState} />
          <Switch
            checked={soundState}
            onChange={() => dispatch(sound())}
          />
        </div>
        {state.wordsBtns.length !== 0 && words && !state.click ? <SavannahWord timer={fail} word={state.word['word']} click={state.click}/> : <Spin size="large" />}
      </div>
      <div className="savannah_progress">
      {words ? <ProgressBar data={[state.SuccessWords.length, state.FailWords.length, words.length - 4]} />: ''}
      </div>
      <div className="choose_word_btn">
       {state.wordsBtns.length !== 0 && words ? state.wordsBtns.map((e:any, i:any)=> {
        return (
          <Button style={state.click ? (e["wordTranslate"] === state.word['wordTranslate'] ? {background: "#52c41a"}: {background: "#f61c1c"}) : {background: "rgba(255,255,255,0.75)"}} autoFocus={!state.click} disabled={state.click} key={i} onClick={() => handlerClick(e["wordTranslate"])} >{`${i+1}.${e["wordTranslate"]}`}</Button>  
        )
       }) : <Spin style={preloaderStyle} size="large" />}
      </div> 
      <div className="savannah_icon">
        <img className="savannah_icon_tree" style={state.click ? {animation: 'tree 0.8s infinite linear'} : {}} src="../../img/tree.svg" alt="tree"/>
        <img className="savannah_icon_sun" src="../../img/sun.svg" alt="sun"/>
      </div>
      <FullscreenGame />
      {(words && state.SuccessWords.length + state.FailWords.length === words.length-4) || (words && state.FailWords.length === 5) ? 
      <StatisticModal streak={[streak, streakStat]} game={"Savannah"} setStart={setStart} words={[state.SuccessWords, state.FailWords, words.length - 4]} /> : ''}
    </>
  );
}


function SvgSound({soundState}:any) {
  const dispatch = useDispatch();
    if (!soundState) { 
  return (
    <svg onClick={() => dispatch(sound())} id="Capa_1" fill="#fff" enableBackground="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><g><path d="m15 361h91c20.151 0 51.121 19.681 87.204 55.419 29.199 28.92 51.623 58.354 51.844 58.645 3.912 5.158 10.656 7.198 16.733 5.154 6.106-2.054 10.219-7.776 10.219-14.218v-150c33.084 0 60-26.916 60-60s-26.916-60-60-60v-150c0-6.442-4.113-12.164-10.219-14.218-6.106-2.053-12.84.021-16.733 5.154-.221.292-22.448 29.492-51.61 58.413-36.187 35.887-67.239 55.651-87.438 55.651h-91c-8.284 0-15 6.716-15 15v180c0 8.284 6.716 15 15 15zm257-135c16.542 0 30 13.458 30 30s-13.458 30-30 30zm-151-46.787c26.248-5.964 57.629-26.926 93.562-62.562 10.186-10.102 19.502-20.151 27.438-29.114v336.927c-7.936-8.964-17.252-19.012-27.438-29.114-35.934-35.636-67.315-56.598-93.562-62.562zm-91 1.787h61v150h-61z"/><path d="m424.817 96.97c-5.858 5.858-5.858 15.355 0 21.213 36.875 36.875 57.183 85.819 57.183 137.817s-20.308 100.942-57.183 137.817c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.354 5.859 21.213 0 42.541-42.541 65.97-99.019 65.97-159.03s-23.429-116.489-65.97-159.03c-5.858-5.858-15.356-5.858-21.213 0z"/><path d="m361.206 351.419c5.857 5.857 15.354 5.859 21.213 0 25.524-25.523 39.581-59.411 39.581-95.419s-14.057-69.896-39.581-95.419c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c19.858 19.858 30.794 46.211 30.794 74.206s-10.936 54.348-30.794 74.206c-5.858 5.858-5.858 15.355 0 21.213z"/>
   <line opacity="1" id="svg_8" y2="513.45" x2="514" y1="-2.55" x1="-2" strokeWidth="25" stroke="#fff" fill="none"/>
    <line opacity="1" id="svg_9" y2="2.45" x2="546" y1="557.45" x1="-34" strokeWidth="25" stroke="#fff" fill="none"/>
    </g>
    </svg>
  )
    }
    else {
      return (
        <svg onClick={() => dispatch(sound())} id="Capa_1" fill="#fff" enableBackground="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><g><path d="m15 361h91c20.151 0 51.121 19.681 87.204 55.419 29.199 28.92 51.623 58.354 51.844 58.645 3.912 5.158 10.656 7.198 16.733 5.154 6.106-2.054 10.219-7.776 10.219-14.218v-150c33.084 0 60-26.916 60-60s-26.916-60-60-60v-150c0-6.442-4.113-12.164-10.219-14.218-6.106-2.053-12.84.021-16.733 5.154-.221.292-22.448 29.492-51.61 58.413-36.187 35.887-67.239 55.651-87.438 55.651h-91c-8.284 0-15 6.716-15 15v180c0 8.284 6.716 15 15 15zm257-135c16.542 0 30 13.458 30 30s-13.458 30-30 30zm-151-46.787c26.248-5.964 57.629-26.926 93.562-62.562 10.186-10.102 19.502-20.151 27.438-29.114v336.927c-7.936-8.964-17.252-19.012-27.438-29.114-35.934-35.636-67.315-56.598-93.562-62.562zm-91 1.787h61v150h-61z"/><path d="m424.817 96.97c-5.858 5.858-5.858 15.355 0 21.213 36.875 36.875 57.183 85.819 57.183 137.817s-20.308 100.942-57.183 137.817c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.354 5.859 21.213 0 42.541-42.541 65.97-99.019 65.97-159.03s-23.429-116.489-65.97-159.03c-5.858-5.858-15.356-5.858-21.213 0z"/><path d="m361.206 351.419c5.857 5.857 15.354 5.859 21.213 0 25.524-25.523 39.581-59.411 39.581-95.419s-14.057-69.896-39.581-95.419c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213c19.858 19.858 30.794 46.211 30.794 74.206s-10.936 54.348-30.794 74.206c-5.858 5.858-5.858 15.355 0 21.213z"/>
        </g>
        </svg>
      )
    }
}
