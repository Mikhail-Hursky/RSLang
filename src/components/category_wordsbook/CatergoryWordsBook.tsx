import { Button, Pagination, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import CardWords from "../category_card_word/CardWords";
import PginationBlock from "../pagination_block/PginationBlock";

export default function CatergoryWordsBook() {
  const [groups, setGroups] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    Api.getGroupsArr(groups).then((response) => {
      const res = response.data.map((item: any) => {
        return (
          <CardWords
            key={item.id}
            bgStyle={{ backgroundColor: "pink" }}
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
      console.log(res);

      setWords(res);
    });
    return () => setWords([]);
  }, [groups]);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setGroups(0);
          }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            setGroups(1);
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            setGroups(2);
          }}
        >
          3
        </Button>
        <Button
          onClick={() => {
            setGroups(3);
          }}
        >
          4
        </Button>
        <Button
          onClick={() => {
            setGroups(4);
          }}
        >
          5
        </Button>
        <Button
          onClick={() => {
            setGroups(5);
          }}
        >
          6
        </Button>
      </div>
      <div>
        {words.length > 0 ? (
          <PginationBlock words={words} />
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
}
