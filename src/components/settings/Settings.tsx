import React from "react";
import { Switch, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import {
  wordPlus,
  wordMinus,
  cardMinus,
  cardPlus,
  buttonDelete,
  buttonExample,
  buttonHard,
  buttonMeaning,
  buttonPicture,
  buttonTranscription,
  buttonTranslate,
} from "../../redux/action/settingAction";

import "./Settings.scss";

export default function Settings() {
  const dispatch = useDispatch();
  const {
    settingWords,
    settingCards,
    btnDelete,
    btnExample,
    btnHard,
    btnMeaning,
    btnPicture,
    btnTranscription,
    btnTranslate,
  } = useSelector((state: State) => state.setting);

  return (
    <div className="settings">
      <div className="settings_main">
        <h2>Основные параметры</h2>
        <div className="words_set">
          <h3>Настройки ежедневного обучения</h3>
          <p>Количество слов в игре для изучения(исключая Спринт)</p>
          <div className="count_words">
            <button onClick={() => dispatch(wordMinus())}>-</button>
            <span>{settingWords}</span>
            <button onClick={() => dispatch(wordPlus())}>+</button>
          </div>
          <p>Максимальное количество карточек на странице учебника</p>
          <div className="count_cards">
            <button onClick={() => dispatch(cardMinus())}>-</button>
            <span>{settingCards}</span>
            <button onClick={() => dispatch(cardPlus())}>+</button>
          </div>
        </div>
      </div>
      <div className="settings_words">
        <h2>Настройки Учебника</h2>
        <div className="set_btns">
          <h3>Настройка отображения кнопок</h3>
          <div className="checkbox_btns">
            <Checkbox checked={btnHard} onChange={() => dispatch(buttonHard())}>
              Кнопка «Сложно»
            </Checkbox>
            <Checkbox
              checked={btnDelete}
              onChange={() => dispatch(buttonDelete())}
            >
              Кнопка «Удалить»
            </Checkbox>
          </div>
        </div>
        <div className="set_cards">
          <h3>Настройка отображения карточки</h3>
          <div className="checkbox_btns">
            <Checkbox
              checked={btnTranslate}
              onChange={() => dispatch(buttonTranslate())}
            >
              Перевод слова
            </Checkbox>
            <Checkbox
              checked={btnMeaning}
              onChange={() => dispatch(buttonMeaning())}
            >
              Смысл слова
            </Checkbox>
            <Checkbox
              checked={btnExample}
              onChange={() => dispatch(buttonExample())}
            >
              Пример использования слова
            </Checkbox>
            <Checkbox
              checked={btnTranscription}
              onChange={() => dispatch(buttonTranscription())}
            >
              Транскрипция слова
            </Checkbox>
            <Checkbox
              checked={btnPicture}
              onChange={() => dispatch(buttonPicture())}
            >
              Картинка-ассоциация
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
}
