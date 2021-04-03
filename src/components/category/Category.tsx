import React, { useEffect, useState, useLayoutEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";
import axios from "axios";

import { Link } from "react-router-dom";
import { Button, Card  } from 'antd';
import { Pagination } from 'antd';

import LinkTop from "../link-top/Link-top";

import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import WordsItem from "../words-item/Words-item";

import "./Category.scss";

export default function Category(props: any) {

  const categories = CATEGORIES_WORDS;

  const group = useSelector((state: State) => state.setting.group);
  let indexCategory = group;
  let colorPage = categories.filter((item) => item.id === indexCategory);
  let colorPageValue = colorPage[0].color;
  const bgStyle = {
    backgroundColor: `${colorPageValue}`
  };
  const btnGameStyle:React.CSSProperties = {float: 'right', margin: '7px', filter: 'invert(100%)', background: `${colorPageValue}`, borderColor: `${colorPageValue}`};
  let [response, setResponse] = useState<any | null>(null);
  let [words, setWords] = useState<any | null>(null);

  const baseCardURL = 'https://raw.githubusercontent.com/mig-marina/rslang-data/master/';
  const base = 'https://team-rslang-app.herokuapp.com/';
  // const base = 'https://raw.githubusercontent.com/mig-marina/rslang-data/master/';
  // const baseUrl = "https://lang-en.herokuapp.com/words";
  const baseUrl = "https://team-rslang-app.herokuapp.com/words";
  let pageToken = '0';
  let groupToken = group;
  let url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;

  useEffect(() => {
      axios.get(url).then(function (response) {
        setResponse(response.data);
        setWords(response.data);
      });
    }, [group]);

  useLayoutEffect(() => {
      otherCategory(group);
    }, []);

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
            <div className="word-header">
              <div className="col-left">
                <div className="wrap-img">
                  <img src={base + item.image} alt="" />
                </div>
              </div>
              <div className="col-right">
                <p className="word-title">{item.word}</p>
                <p className="word-translate">{item.wordTranslate}</p>
                <p className="word-transcription">{item.transcription}</p>
              </div>
              <div className="button button-word">
                <button style={bgStyle} onClick={() => {
                  let urlSound=`${base}${item.audio}`;
                  startPlay(urlSound)}}>
                  <span className="material-icons">headphones</span>
                  <audio>
                    <source src={ base + item.audio } type="audio/mp3" />
                  </audio>
                </button>
              </div>
            </div>

            <div className="word-body">
              <div className="word-example">
                <div className="word-example-text">
                  <p dangerouslySetInnerHTML={{__html: item.textExample}}></p>
                  <p>{item.textExampleTranslate}</p>
                </div>
                <div className="button button-sound">
                  <button style={bgStyle} onClick={() => {
                    let urlSound=`${base}${item.audioExample}`;
                    startPlay(urlSound)}}>
                    <span className="material-icons">headphones</span>
                    <audio>
                      <source src={ base + item.audioExample } type="audio/mp3" />
                    </audio>
                  </button>
                </div>
              </div>
              <div className="word-meaning">
                <div className="word-meaning-text">
                  <p dangerouslySetInnerHTML={{__html: item.textMeaning}}></p>
                  <p>{item.textMeaningTranslate}</p>
                </div>
                <div className="button button-sound">
                  <button style={bgStyle} onClick={() => {
                    let urlSound=`${base}${item.audioMeaning}`;
                    startPlay(urlSound)}}>
                    <span className="material-icons">headphones</span>
                    <audio>
                      <source src={ base + item.audioMeaning } type="audio/mp3" />
                    </audio>
                  </button>
                </div>
              </div>
            </div>

            <div className="buttons-vocabulary">
              <button className="add-to-add" title="добавить в словарь">
                <span className="material-icons">add_task</span>
              </button>
              <button className="add-to-hard" title="отметить как сложное">
                <span className="material-icons">star</span>
              </button>
              <button className="add-to-delete" title="удалить из изучаемых">
                <span className="material-icons">delete_outline</span>
              </button>
            </div>
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
        setResponse(response.data);
        setWords(response.data);
      });
      return e;
    }

    function otherCategory(e: any) {
      window.scrollTo(0, 0);
      pageToken = '0';
      groupToken = e;
      indexCategory = e;
      url = `${baseUrl}?page=${pageToken}&group=${groupToken}`;
      axios.get(url).then(function (response) {
        setResponse(response.data);
        setWords(response.data);
      });
    }

    return(
      <div className="list-word">
        <div className="navigation-categories">
          <p className="navigation-categories-title">Можете изменить уровень выбранной категории:</p>
          <WordsItem categories={categories} />
        </div>

        <h2 style={bgStyle}>Слова из раздела "Уровень {group + 1}" 
        <Link to={{
            pathname: "/games",
            //@ts-ignore
            words: words
        }}><Button type="primary" style={btnGameStyle}>Играть!</Button></Link>
        </h2>
        

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
        <LinkTop />
      </div>
    )
}
