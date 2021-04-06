import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Api, URL } from "../../api/Api";
import { State } from "../../redux/reducer/rootReducer";
import { soundWord } from "../../sound/sound";

interface Props {
  bgStyle: {
    backgroundColor: string;
  };
  idificator: string;
  image: string;
  word: string;
  wordTranslate: string;
  transcription: string;
  audio: string;
  textExample: string;
  textExampleTranslate: string;
  audioExample: string;
  textMeaning: string;
  textMeaningTranslate: string;
  audioMeaning: string;
}

export default function CardWords(props: Props) {
  const { message, token, userId } = useSelector((state: State) => state.user);

  return (
    <Card className={`item-${props.idificator} item`}>
      <div className="word-header">
        <div className="col-left">
          <div className="wrap-img">
            <img src={URL + props.image} alt="" />
          </div>
        </div>
        <div className="col-right">
          <p className="word-title">{props.word}</p>
          <p className="word-translate">{props.wordTranslate}</p>
          <p className="word-transcription">{props.transcription}</p>
        </div>
        <div className="button button-word">
          <button
            style={props.bgStyle}
            onClick={() => {
              let urlSound = `${URL}${props.audio}`;
              soundWord(urlSound);
            }}
          >
            <span className="material-icons">headphones</span>
            <audio>
              <source src={URL + props.audio} type="audio/mp3" />
            </audio>
          </button>
        </div>
      </div>

      <div className="word-body">
        <div className="word-example">
          <div className="word-example-text">
            <p dangerouslySetInnerHTML={{ __html: props.textExample }}></p>
            <p>{props.textExampleTranslate}</p>
          </div>
          <div className="button button-sound">
            <button
              style={props.bgStyle}
              onClick={() => {
                let urlSound = `${URL}${props.audioExample}`;
                soundWord(urlSound);
              }}
            >
              <span className="material-icons">headphones</span>
              <audio>
                <source src={URL + props.audioExample} type="audio/mp3" />
              </audio>
            </button>
          </div>
        </div>
        <div className="word-meaning">
          <div className="word-meaning-text">
            <p dangerouslySetInnerHTML={{ __html: props.textMeaning }}></p>
            <p>{props.textMeaningTranslate}</p>
          </div>
          <div className="button button-sound">
            <button
              style={props.bgStyle}
              onClick={() => {
                let urlSound = `${URL}${props.audioMeaning}`;
                soundWord(urlSound);
              }}
            >
              <span className="material-icons">headphones</span>
              <audio>
                <source src={URL + props.audioMeaning} type="audio/mp3" />
              </audio>
            </button>
          </div>
        </div>
      </div>
      {message === "Authenticated" ? (
        <div className="buttons-vocabulary">
          <button
            onClick={() => {
              Api.setUserWord(token, userId, props.idificator, "LEARNED");
            }}
            className="add-to-add"
            title="добавить в словарь"
          >
            <span className="material-icons">add_task</span>
          </button>
          <button
            onClick={() => {
              Api.setUserWord(token, userId, props.idificator, "HARD");
            }}
            className="add-to-hard"
            title="отметить как сложное"
          >
            <span className="material-icons">star</span>
          </button>
          <button
            onClick={() => {
              Api.setUserWord(token, userId, props.idificator, "DELETED");
            }}
            className="add-to-delete"
            title="удалить из изучаемых"
          >
            <span className="material-icons">delete_outline</span>
          </button>
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
}
