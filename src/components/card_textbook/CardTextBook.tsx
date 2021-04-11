import { StarFilled, ToTopOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useSelector } from "react-redux";
import { URL } from "../../api/Api";
import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import { State } from "../../redux/reducer/rootReducer";
import Text from "../text/Text";
import TextTitle from "../text/TextTitle";
import "./CardTextBook.scss";

interface Props {
  word: any;
}

export function CardDeleteTextBook({ word }: Props) {
  const { userId, userWords, token } = useSelector(
    (state: State) => state.user
  );

  return (
    <div className="CardDeleteTextBook">
      <img src={URL + word.image} />
      <div className="aboutWord">
        <Title
          style={{ backgroundColor: CATEGORIES_WORDS[word.group].color }}
          className="group"
          level={5}
        >
          Раздел {word.group + 1}
        </Title>
        <TextTitle
          text={word.word}
          textTranslate={word.wordTranslate}
          audio={word.audio}
        />

        <Text
          text={word.textExample}
          textTranslate={word.textExampleTranslate}
          audio={word.audioExample}
        />
        <Text
          text={word.textMeaning}
          textTranslate={word.textMeaningTranslate}
          audio={word.audioMeaning}
        />
      </div>
      <div className="btnGroup">
        <Tooltip title="Восстановить">
          <Button
            shape="circle"
            size="large"
            icon={<ToTopOutlined />}
            type="primary"
            onClick={() => {}}
          />
        </Tooltip>

        <Tooltip title="Добавить в сложные">
          <Button
            shape="circle"
            size="large"
            icon={<StarFilled />}
            type="primary"
            onClick={() => {}}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export function CardHardTextBook({ word }: Props) {
  const { userId, userWords, token } = useSelector(
    (state: State) => state.user
  );

  return (
    <div className="CardHardTextBook">
      <img src={URL + word.image} />
      <div className="aboutWord">
        <Title
          style={{ backgroundColor: CATEGORIES_WORDS[word.group].color }}
          className="group"
          level={5}
        >
          Раздел {word.group + 1}
        </Title>
        <TextTitle
          text={word.word}
          textTranslate={word.wordTranslate}
          audio={word.audio}
        />

        <Text
          text={word.textExample}
          textTranslate={word.textExampleTranslate}
          audio={word.audioExample}
        />
        <Text
          text={word.textMeaning}
          textTranslate={word.textMeaningTranslate}
          audio={word.audioMeaning}
        />
      </div>
      <div className="btnGroup">
        <Tooltip title="Восстановить">
          <Button
            shape="circle"
            size="large"
            icon={<ToTopOutlined />}
            type="primary"
            onClick={() => {}}
          />
        </Tooltip>

        <Tooltip title="Добавить в сложные">
          <Button
            shape="circle"
            size="large"
            icon={<StarFilled />}
            type="primary"
            onClick={() => {}}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export function CardLearnTextBook({ word }: Props) {
  const { userId, userWords, token } = useSelector(
    (state: State) => state.user
  );

  return (
    <div className="CardLearnTextBook">
      <img src={URL + word.image} />
      <div className="aboutWord">
        <Title
          style={{ backgroundColor: CATEGORIES_WORDS[word.group].color }}
          className="group"
          level={5}
        >
          Раздел {word.group + 1}
        </Title>
        <TextTitle
          text={word.word}
          textTranslate={word.wordTranslate}
          audio={word.audio}
        />

        <Text
          text={word.textExample}
          textTranslate={word.textExampleTranslate}
          audio={word.audioExample}
        />
        <Text
          text={word.textMeaning}
          textTranslate={word.textMeaningTranslate}
          audio={word.audioMeaning}
        />
      </div>
      <div className="btnGroup">
        <Tooltip title="Восстановить">
          <Button
            shape="circle"
            size="large"
            icon={<ToTopOutlined />}
            type="primary"
            onClick={() => {}}
          />
        </Tooltip>

        <Tooltip title="Добавить в сложные">
          <Button
            shape="circle"
            size="large"
            icon={<StarFilled />}
            type="primary"
            onClick={() => {}}
          />
        </Tooltip>
      </div>
    </div>
  );
}
