import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";
import axios from "axios";

import { Link } from "react-router-dom";
import { Card  } from 'antd';
import { Pagination } from 'antd';

import "./Category.scss";

export default function Category(props: any) {

  const group = useSelector((state: State) => state.setting.group);
  let [response, setResponse] = useState<any | null>(null);

  const baseCardURL = 'https://raw.githubusercontent.com/mig-marina/rslang-data/master/';
  // const base = 'https://team-rslang-app.herokuapp.com/';
  const base = 'https://raw.githubusercontent.com/mig-marina/rslang-data/master/';


  // const baseUrl = "https://lang-en.herokuapp.com/words";
  const baseUrl = "https://team-rslang-app.herokuapp.com/words";
  let pageToken = '0';
  const groupToken = group;
  let url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;

  useEffect(() => {
      axios.get(url).then(function (response) {
        setResponse(response.data);
      });
    }, [setResponse]);

  function startPlay(urlSound: any) {
    let audio = new Audio();
    audio.src = urlSound;
    audio.autoplay = true;
  }

  if(response) {
    response = response.map((item: any, i: any) => {
        return (
          <Card
            key={i.toString()}
            className={`item-${i} item`}
          >
            <div className="wrap-img">
              <img src={base + item.image} alt="" />
            </div>
            <p className="word-title">{item.word}</p>
            <p className="word-translate">{item.wordTranslate}</p>
            <p className="word-transcription">{item.transcription}</p>
            <div className="button">
              <button onClick={() => {
                let urlSound=`${base}${item.audio}`;
                startPlay(urlSound)}}>
                прослушать
                <audio>
                  <source src={ base + item.audio } type="audio/mp3" />
                </audio>
              </button>
            </div>
            <p>{item.textExample}</p>
            <p>{item.textExampleTranslate}</p>
            <button className="add-to">добавить в словарь</button>
          </Card>
        );
      });
  }


    function onChange(e: any) {
      window.scrollTo(0, 0);
      console.log(e);
      pageToken = e;
      url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;
      axios.get(url).then(function (response) {
        console.log(response.data);
        setResponse(response.data);
      });
      return e;
    }

    return(
      <div className="list-word">
        <h2>category {group + 1}</h2>
        <div className="wrap-list-word">
          {response}
        </div>
        <Pagination
          onChange={onChange}
          total={580}
          defaultPageSize={20}
          defaultCurrent={1}
          showSizeChanger={false}
          showQuickJumper
        />
      </div>
    )
}
