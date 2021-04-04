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
    console.log(e);
    setWords(props.words.slice(e * 20, (e + 1) * 20));
  };

  const itemRender = (current: any, type: any, originalElement: any): any => {
    if (type === "next") {
      return <span>Перейти к - </span>;
    }
    return originalElement;
  };

  return (
    <>
      <div className="PginationBlock">{words}</div>
      <Pagination
        onChange={onChange}
        total={600}
        defaultPageSize={20}
        defaultCurrent={1}
        showSizeChanger={false}
        showQuickJumper
        itemRender={itemRender}
      />
    </>
  );
}
