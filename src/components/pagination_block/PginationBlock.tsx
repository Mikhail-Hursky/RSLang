import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Word } from "../../interfaces/Words";
import { State } from "../../redux/reducer/rootReducer";
import CardWords from "../category_card_word/CardWords";
import "./PginationBlock.scss";

interface Props {
  words: Word[];
  bgStyle: React.CSSProperties;
  page: any;
  setPage: any;
}

export default function PginationBlock(props: Props) {
  const { userWords } = useSelector((state: State) => state.user);
  const { settingCards } = useSelector((state: State) => state.setting);
  const delete_word = userWords.filter((e: any) => e.difficulty === "DELETED");
  const [idWordDelete, setIdWord] = useState("");
  const [words, setWords] = useState(
    props.words.filter((res: any) => {
      if (!delete_word.map((e: any) => e["wordId"]).includes(res.id))
        return res;
    })
  );
  const hardWords = userWords
    .filter((word: any) => {
      return word.difficulty === "HARD";
    })
    .map((word: any) => word.wordId);

  useEffect(() => {
    setWords(words.filter((item: Word) => item.id !== idWordDelete));
  }, [idWordDelete]);

  const onChange = (e: any) => {
    window.scrollTo(0, 0);
    props.setPage(e);
  };

  const itemRender = (current: any, type: any, originalElement: any): any => {
    if (type === "next") {
      return <span>Перейти к - </span>;
    }
    return originalElement;
  };

  return (
    <>
      <div className="wrap-list-word">
        {words
          .slice((props.page - 1) * settingCards, props.page * settingCards)
          .map((item) => (
            <CardWords
              key={item.id}
              setIdWord={setIdWord}
              bgStyle={props.bgStyle}
              item={item}
              isHard={hardWords.includes(item.id)}
            />
          ))}
      </div>
      <Pagination
        onChange={onChange}
        total={words.length}
        defaultPageSize={settingCards}
        defaultCurrent={1}
        showSizeChanger={false}
        showQuickJumper
        itemRender={itemRender}
      />
    </>
  );
}
