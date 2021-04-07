import { DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Tooltip } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Api, URL } from "../../api/Api";
import { Word } from "../../interfaces/Words";
import { State } from "../../redux/reducer/rootReducer";
import { soundWord } from "../../sound/sound";

interface Props {
  bgStyle: React.CSSProperties;
  item: Word;
  setIdWord(id: string): void;
}

export default function CardWords({ setIdWord, bgStyle, item }: Props) {
  const { message, token, userId } = useSelector((state: State) => state.user);

  return (
    <Card className={`item-${item.id} item`}>
      <div className="word-header">
        <div className="col-left">
          <div className="wrap-img">
            <img src={URL + item.image} alt="" />
          </div>
        </div>
        <div className="col-right">
          <p className="word-title">{item.word}</p>
          <p className="word-translate">{item.wordTranslate}</p>
          <p className="word-transcription">{item.transcription}</p>
        </div>
        <div className="button button-word">
          <button
            style={bgStyle}
            onClick={() => {
              let urlSound = `${URL}${item.audio}`;
              soundWord(urlSound);
            }}
          >
            <span className="material-icons">headphones</span>
            <audio>
              <source src={URL + item.audio} type="audio/mp3" />
            </audio>
          </button>
        </div>
      </div>
      <div className="word-body">
        <div className="word-example">
          <div className="word-example-text">
            <p dangerouslySetInnerHTML={{ __html: item.textExample }}></p>
            <p>{item.textExampleTranslate}</p>
          </div>
          <div className="button button-sound">
            <button
              style={bgStyle}
              onClick={() => {
                let urlSound = `${URL}${item.audioExample}`;
                soundWord(urlSound);
              }}
            >
              <span className="material-icons">headphones</span>
              <audio>
                <source src={URL + item.audioExample} type="audio/mp3" />
              </audio>
            </button>
          </div>
        </div>
        <div className="word-meaning">
          <div className="word-meaning-text">
            <p dangerouslySetInnerHTML={{ __html: item.textMeaning }}></p>
            <p>{item.textMeaningTranslate}</p>
          </div>
          <div className="button button-sound">
            <button
              style={bgStyle}
              onClick={() => {
                let urlSound = `${URL}${item.audioMeaning}`;
                soundWord(urlSound);
              }}
            >
              <span className="material-icons">headphones</span>
              <audio>
                <source src={URL + item.audioMeaning} type="audio/mp3" />
              </audio>
            </button>
          </div>
        </div>
      </div>
      {message === "Authenticated" ? (
        <div className="buttons-vocabulary">
          <Tooltip title="Отметить как сложное">
            <Button
              type="primary"
              size="large"
              onClick={() => {
                Api.setUserWord(token, userId, item.id, "HARD");
              }}
              className="add-to-hard"
              icon={<StarOutlined />}
              shape="circle"
            />
          </Tooltip>
          <Tooltip title="Удалить из изучаемых">
            <Button
              type="primary"
              danger
              size="large"
              onClick={() => {
                setIdWord(item.id);
              }}
              className="add-to-delete"
              title="удалить из изучаемых"
              icon={<DeleteOutlined />}
              shape="circle"
            />
          </Tooltip>
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
}
