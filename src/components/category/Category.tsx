import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import { Link } from "react-router-dom";
import { Button, Spin } from "antd";
import LinkTop from "../link-top/Link-top";
import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import WordsItem from "../words-item/Words-item";
import "./Category.scss";
import { Api } from "../../api/Api";
import PginationBlock from "../pagination_block/PginationBlock";

export default function Category() {
  const [words, setWords] = useState<any | null>([]);
  const group = useSelector((state: State) => state.setting.group);
  const { userWords } = useSelector((state: State) => state.user);
  const categories = CATEGORIES_WORDS;
  let indexCategory = group;
  let colorPage = categories.filter((item) => item.id === indexCategory);
  let colorPageValue = colorPage[0].color;
  const bgStyle: React.CSSProperties = {
    backgroundColor: `${colorPageValue}`,
  };
  console.log(bgStyle);

  const btnGameStyle: React.CSSProperties = {
    float: "right",
    margin: "7px",
    filter: "invert(100%)",
    background: `${colorPageValue}`,
    borderColor: `${colorPageValue}`,
  };

  const getListWords = (group: number) => {
    Api.getGroupsArr(group).then((response) => {
      setWords(response.data);
    });
  };

  useEffect(() => {
    getListWords(group);
    return () => setWords([]);
  }, [group]);

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
      {words.length > 0 ? (
        <PginationBlock bgStyle={bgStyle} words={words} />
      ) : (
        <Spin size="large" />
      )}
      <LinkTop />
    </div>
  );
}
