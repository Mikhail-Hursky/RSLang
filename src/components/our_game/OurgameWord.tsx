import React, { useEffect } from "react";

export default function OurgameWord(props: any) {
  useEffect(() => {}, []);

  return (
    <div className="ourgame_word_contain">
      <h2 className="ourgame_word">{props.word[0]}</h2>
      <p dangerouslySetInnerHTML={{ __html: props.word[1] }}></p>
    </div>
  );
}
