import React from "react";
import { Link } from "react-router-dom";

import "./Learning.scss";

export default function Learning() {

 return(
  <div className="learning">
  <div className="learning_title">
    <h2>Приступим к обучению!</h2>
    <p>На этой странице вы можете следить за своим прогрессом и выбирать желаемый набор слов для изучения, например, <strong>“Новые слова”</strong>, <strong>“Повторить слова”</strong> или <strong>“Сложные слова”</strong>. Удачи!</p>
   </div>
  <div className="learning_stat">
   <h2>Сегодня изучено</h2>
   <span>3 из 10 слов</span>
   <progress max="10" value="3">
      3 из 10
  </progress>
  </div>
  <div className="learning_cards">
   <div className="learning_cards_new">
    <h2>Новые слова</h2>
    <p>Нажмите, чтобы выучить новые слова на сегодня.</p>
    <button>Начать!</button>
   </div>
   <div className="learning_cards_repeat">
   <h2>Повторить слова</h2>
   <p>Нажмите, чтобы повторить выученные слова.</p>
   <button>Начать!</button>
   </div>
   <div className="learning_cards_hard">
   <h2>Сложные слова</h2>
   <p>Нажмите, чтобы повторить сложные слова.</p>
   <button>Начать!</button>
   </div>
  </div>
  </div>
  
 )
}