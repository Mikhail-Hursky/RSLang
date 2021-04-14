import React from "react";
import Words from "../words/Words"
import "./Learning.scss";

export default function Learning() {

 return(
  <div className="learning">
    <div className="learning_header">
      <h2>Приступим к обучению!</h2>
      <p>На этой странице вы можете изучать новые слова, повторять уже изученные, определять, какие слова для вас сложные и формировать свой словарь. Удачи!</p>
      <p>Чтобы отметить слово как <span className="color-strong">сложное или удаленное</span> - воспользуйтесь специальными кнопками возле карточки со словом</p>
      <p>Слово считается <span className="color-strong">изученным</span>, если в игре вы не допускали с ним ошибок</p>
    </div>
     <div className="learning-categories">
       <Words />
     </div>
  </div>
 )
}
