import React from "react";

import "./Promo-description.scss";

export default function PromoDescription() {

  return(
   <div className="promo-description">
    <div className="promo-img">
      <h3>Хотите выучить английский?</h3>
      <h3>С приложением RS Lang это будет не только возможно, но еще легко и увлекательно!</h3>
    </div>
    <p className="description-prev">Вам доступно:</p>
    <ul className="list-description">
      <li>
        <p>Выбирать уровень сложности</p>
      </li>
      <li>
        <p>Формировать свой словарь</p>
      </li>
      <li>
        <p>Отмечать сложные слова</p>
      </li>
      <li>
        <p>Исключать уже выученные слова</p>
      </li>
      <li>
        <p>Менять настройки</p>
      </li>
      <li>
        <p>Закрепять свои знания в играх</p>
      </li>
      <li>
        <p>Отслеживать свои успехи</p>
      </li>
    </ul>
   </div>
  )
}
