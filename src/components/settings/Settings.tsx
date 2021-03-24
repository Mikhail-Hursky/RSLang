import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Switch, Checkbox } from 'antd';

import "./Settings.scss";

export default function Settings() {
const [wordCount, setWordCount] = useState(10);
const [cardCount, setCardCount] = useState(20);

 return (
  <div className="settings">
   <div className="settings_main">
    <h2>Основные параметры</h2>
    <h3>Настройки звука</h3>
   <div className="sound_switch">
   <Switch defaultChecked />
  <p>Автоматическая озвучка</p>
  </div>
  <div className="words_set">
   <h3>Настройки ежедневного обучения</h3>
   <p>Количество новых слов в день для изучения</p>
   <div className="count_words">
    <button onClick={() => setWordCount(wordCount-1)}>-</button>
    <span>{wordCount}</span>
    <button onClick={() => setWordCount(wordCount+1)}>+</button>
   </div>
   <p>Максимальное количество карточек для изучения в день</p>
   <div className="count_cards">
    <button onClick={() => setCardCount(cardCount-1)}>-</button>
    <span>{cardCount}</span>
    <button onClick={() => setCardCount(cardCount+1)}>+</button>
   </div>
  </div>
   </div>
   <div className="settings_words">
   <h2>Настройки изучения слов</h2>
   <div className="set_btns">
    <h3>Настройка отображения кнопок</h3>
    <div className="checkbox_btns">
    <Checkbox defaultChecked>Кнопка «Повторить»</Checkbox>
    <Checkbox defaultChecked>Кнопка «Сложно»</Checkbox>
    <Checkbox defaultChecked>Кнопка «Хорошо»</Checkbox>
    <Checkbox defaultChecked>Кнопка «Легко»</Checkbox>
    <Checkbox defaultChecked>Кнопка «Удалить»</Checkbox></div>
   </div>
   <div className="set_cards">
   <h3>Настройка отображения карточки</h3>
   <div className="checkbox_btns">
    <Checkbox defaultChecked>Перевод слова</Checkbox>
    <Checkbox defaultChecked>Смысл слова</Checkbox>
    <Checkbox defaultChecked>Пример использования слова</Checkbox>
    <Checkbox defaultChecked>Транскрипция слова</Checkbox>
    <Checkbox defaultChecked>Картинка-ассоциация</Checkbox>
    <Checkbox defaultChecked>Кнопка «Показать ответ»</Checkbox>
   </div>
   </div>
   </div>
  </div>
 )
}