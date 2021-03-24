import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Switch, Checkbox } from 'antd';

import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import { wordPlus, wordMinus, setSound, cardMinus, cardPlus, buttonAnswer,buttonDelete,buttonEasy,buttonExample,buttonGood,buttonHard,buttonMeaning,buttonPicture,buttonRepeate,buttonTranscription,buttonTranslate } from "../../redux/action/settingAction";

import "./Settings.scss";

export default function Settings() {

const dispatch = useDispatch();
const {settingWords, settingCards, settingSound, btnAnswer,btnDelete,btnEasy,btnExample,btnGood,btnHard,btnMeaning,btnPicture,btnRepeate,btnTranscription,btnTranslate} = useSelector((state: State) => state.setting);

 return (
  <div className="settings">
   <div className="settings_main">
    <h2>Основные параметры</h2>
    <h3>Настройки звука</h3>
   <div className="sound_switch">
   <Switch checked={settingSound} onChange={() => dispatch(setSound())}/>
  <p>Автоматическая озвучка</p>
  </div>
  <div className="words_set">
   <h3>Настройки ежедневного обучения</h3>
   <p>Количество новых слов в день для изучения</p>
   <div className="count_words">
    <button onClick={() => dispatch(wordMinus())}>-</button>
    <span>{settingWords}</span>
    <button onClick={() => dispatch(wordPlus())}>+</button>
   </div>
   <p>Максимальное количество карточек для изучения в день</p>
   <div className="count_cards">
    <button onClick={() => dispatch(cardMinus())}>-</button>
    <span>{settingCards}</span>
    <button onClick={() => dispatch(cardPlus())}>+</button>
   </div>
  </div>
   </div>
   <div className="settings_words">
   <h2>Настройки изучения слов</h2>
   <div className="set_btns">
    <h3>Настройка отображения кнопок</h3>
    <div className="checkbox_btns">
    <Checkbox checked={btnRepeate} onChange={() => dispatch(buttonRepeate())}>Кнопка «Повторить»</Checkbox>
    <Checkbox checked={btnHard} onChange={() => dispatch(buttonHard())}>Кнопка «Сложно»</Checkbox>
    <Checkbox checked={btnGood} onChange={() => dispatch(buttonGood())}>Кнопка «Хорошо»</Checkbox>
    <Checkbox checked={btnEasy} onChange={() => dispatch(buttonEasy())}>Кнопка «Легко»</Checkbox>
    <Checkbox checked={btnDelete} onChange={() => dispatch(buttonDelete())}>Кнопка «Удалить»</Checkbox></div>
   </div>
   <div className="set_cards">
   <h3>Настройка отображения карточки</h3>
   <div className="checkbox_btns">
    <Checkbox checked={btnTranslate} onChange={() => dispatch(buttonTranslate())}>Перевод слова</Checkbox>
    <Checkbox checked={btnMeaning} onChange={() => dispatch(buttonMeaning())}>Смысл слова</Checkbox>
    <Checkbox checked={btnExample} onChange={() => dispatch(buttonExample())}>Пример использования слова</Checkbox>
    <Checkbox checked={btnTranscription} onChange={() => dispatch(buttonTranscription())}>Транскрипция слова</Checkbox>
    <Checkbox checked={btnPicture} onChange={() => dispatch(buttonPicture())}>Картинка-ассоциация</Checkbox>
    <Checkbox checked={btnAnswer} onChange={() => dispatch(buttonAnswer())}>Кнопка «Показать ответ»</Checkbox>
   </div>
   </div>
   </div>
  </div>
 )
}