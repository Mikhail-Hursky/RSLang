import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Pagination } from "antd";
import LinkTop from "../link-top/Link-top";
import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import WordsItem from "../words-item/Words-item";
import "./Category.scss";
import { Api } from "../../api/Api";
import CardWords from "../category_card_word/CardWords";

export default function Category(props: any) {
  const [response, setResponse] = useState<any | null>(null);
  const [words, setWords] = useState<any | null>(null);
  let arr = [];
  const categories = CATEGORIES_WORDS;
  const group = useSelector((state: State) => state.setting.group);
  let indexCategory = group;
  let colorPage = categories.filter((item) => item.id === indexCategory);
  let colorPageValue = colorPage[0].color;
  const bgStyle = {
    backgroundColor: `${colorPageValue}`,
  };
  const btnGameStyle: React.CSSProperties = {
    float: "right",
    margin: "7px",
    filter: "invert(100%)",
    background: `${colorPageValue}`,
    borderColor: `${colorPageValue}`,
  };

  let pageToken = "0";
  let groupToken = group;

  useEffect(() => {
    Api.getWordsArr(group, 0).then((response: any) => {
      setResponse(response.data);
      setWords(response.data);
    });
  }, [group]);

  useLayoutEffect(() => {
    otherCategory(group);
  }, []);

  if (response) {
    arr = response.map((item: any, i: any) => {
      return (
        <CardWords
          key={item.id}
          bgStyle={bgStyle}
          idificator={item.id}
          image={item.image}
          word={item.word}
          wordTranslate={item.wordTranslate}
          transcription={item.transcription}
          audio={item.audio}
          textExample={item.textExample}
          textExampleTranslate={item.textExampleTranslate}
          audioExample={item.audioExample}
          textMeaning={item.textMeaning}
          textMeaningTranslate={item.textMeaningTranslate}
          audioMeaning={item.audioMeaning}
        />
      );
    });
  }

  function onChange(e: any) {
    window.scrollTo(0, 0);
    Api.getWordsArr(group, e - 1).then((response: any) => {
      setResponse(response.data);
      setWords(response.data);
    });
  }

  function otherCategory(e: any) {
    window.scrollTo(0, 0);
    pageToken = "0";
    groupToken = e;
    indexCategory = e;
    Api.getWordsArr(group, e - 1).then((response: any) => {
      setResponse(response.data);
      setWords(response.data);
    });
  }

  function itemRender(current: any, type: any, originalElement: any): any {
    if (type === "next") {
      return <span>Перейти к - </span>;
    }
    return originalElement;
  }
  return (
    <div className="list-word">
      <div className="navigation-categories">
        <p className="navigation-categories-title">
          Можете изменить уровень выбранной категории:
        </p>
        <WordsItem categories={categories} />
      </div>

      <h2 style={bgStyle}>
        Слова из раздела "Уровень {group + 1}"
        <Link
          to={{
            pathname: "/games",
            //@ts-ignore
            words: words,
          }}
        >
          <Button type="primary" style={btnGameStyle}>
            Играть!
          </Button>
        </Link>
      </h2>

      <div className="wrap-list-word">{arr}</div>
      <Pagination
        onChange={onChange}
        total={600}
        defaultPageSize={20}
        defaultCurrent={1}
        showSizeChanger={false}
        showQuickJumper
        itemRender={itemRender}
      />
      <LinkTop />
    </div>
  );
}
