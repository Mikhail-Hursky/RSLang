import { Pagination } from "antd";
import React, { useState } from "react";
import { Word } from "../../interfaces/Words";
import "./PginationBlock.scss";

interface Props {
  words: Word[];
}

export default function PginationBlock(props: Props) {
  const [words, setWords] = useState(props.words.slice(0, 20));
  const onChange = (e: any) => {
    window.scrollTo(0, 0);
    setWords(props.words.slice((e - 1) * 20, e * 20));
  };

  const itemRender = (current: any, type: any, originalElement: any): any => {
    if (type === "next") {
      return <span>Перейти к - </span>;
    }
    return originalElement;
  };

  return (
    <>
      <div className="wrap-list-word">{words}</div>
      <Pagination
        onChange={onChange}
        total={props.words.length}
        defaultPageSize={20}
        defaultCurrent={1}
        showSizeChanger={false}
        showQuickJumper
        itemRender={itemRender}
      />
    </>
  );
}
