import React from "react";

import PositionCarouselDemo from "../slider/Slider";

import "./Vocabulary.scss";

export default function Vocabulary() {

  return(
   <div className="vocabulary">
    {/* <p className="vocabulary-title">В словаре вы можете видеть <span className="color-strong">все изученные</span> вами слова и отдельно те из них, которые вы отметили как <span className="color-strong">сложные</span>.</p>
    <p className="vocabulary-title">Если вы хорошо усвоили какое-то слово, то можете отемтить его как <span className="color-strong">удаленное</span> и оно не будет доступным в учебнике или играх, но у вас по-прежнему будет к нему доступ через словарь.</p>
    <p className="vocabulary-title"><span className="color-strong">Статус слов</span> - сложное или удаленное <span className="color-strong">можно изменять самостоятельно</span></p>
    <p className="vocabulary-title"> Для переключения используйте ленту слайдера</p> */}
    <PositionCarouselDemo />
   </div>
  )
}
