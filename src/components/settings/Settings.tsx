import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./Settings.scss";

export default function Settings() {
const [wordCount, setWordCount] = useState(10);
const [cardCount, setCardCount] = useState(20);

 return (
  <div className="settings">
   <div className="settings_main">
    <h2>Основные параметры</h2>
    <h3>Настройки звука</h3>
   <div id="btn">
   <div className="cek3">
  <input type="checkbox" id="s5" />
  <label className="sliderce" htmlFor="s5"></label>
  </div>
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
    <div className="settings_checkbox">
    <input type="checkbox" id="todo" name="todo" value="todo" />
    <label htmlFor="todo" data-content="Кнопка «Повторить»" />
    </div>
    <div className="settings_checkbox">
    <input type="checkbox" id="todo" name="todo" value="todo" />
    <label htmlFor="todo" data-content="Кнопка «Сложно»" />
    </div>
   </div>
   <div className="set_cards">
   <h3>Настройка отображения карточки</h3>
   </div>
   </div>
  </div>
 )
}