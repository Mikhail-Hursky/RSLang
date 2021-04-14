import React from "react";

import gameAudioCall from "../../assets/img/game-audio.jpg";
import gameSprint from "../../assets/img/game-sprint.jpg";
import gameSavanna from "../../assets/img/game-savanna.jpg";
import gameOur from "../../assets/img/game-our.jpg";

import "./Promo-games.scss";

export default function PromoGames() {

  return(
   <div className="promo-games">
    <h3>Устали от обычного процесса обучения? Переходите к играм!</h3>
    <h3>Выбирайте слова из учебника, устанавливайте свой уровень сложности и вперед - учиться весело!</h3>
    <ul className="list-games">
      <li>
        <h4>Аудиовызов</h4>
        <div className="game-description">
          <div className="game-img">
            <img src={gameAudioCall} alt="аудиовызов" />
          </div>
          <p>Мини-игра «Аудиовызов» - это тренировка, развивающая навыки речи и перевода. Вы слышите слово и видите 5 вариантов перевода. Необходимо выбрать правильный ответ.
          </p>
        </div>
      </li>
      <li>
        <h4>Спринт</h4>
        <div className="game-description">
          <div className="game-img">
            <img src={gameSprint} alt="спринт" />
          </div>
          <p>Эта игра - тренировка для повторения заученных слов из вашего словаря. После запуска игры вы увидите слово и перевод. Вам нужно выбрать, правильно это или нет.
          </p>
        </div>
      </li>
      <li>
        <h4>Саванна</h4>
        <div className="game-description">
          <div className="game-img">
            <img src={gameSavanna} alt="саванна" />
          </div>
          <p>Игра «Саванна» позволяет проводить тренировки по переводу пассивного изученного словаря в активную стадию. После запуска игры вы увидите падающее слово на английском и четыре варианта перевода.
          </p>
        </div>
      </li>
      <li>
        <h4>Наша игра</h4>
        <div className="game-description">
          <div className="game-img">
            <img src={gameOur} alt="наша игра" />
          </div>
          <p>Игра «Наша игра» - это помощь в визуализации английских слов. После запуска игры вы увидите слово на английском языке и четыре варианта изображения.
          </p>
        </div>
      </li>
    </ul>
   </div>
  )
}
