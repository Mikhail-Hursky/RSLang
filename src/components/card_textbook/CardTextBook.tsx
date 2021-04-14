import {
  DeleteOutlined,
  StarFilled,
  StarOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Api, URL } from "../../api/Api";
import { CATEGORIES_WORDS } from "../../mock-data/categoriesWords";
import { State } from "../../redux/reducer/rootReducer";
import Text from "../text/Text";
import { message as Message } from "antd";
import TextTitle from "../text/TextTitle";
import "./CardTextBook.scss";

interface Props {
  word: any;
  setUpdate(value: boolean): void;
}

export function CardDeleteTextBook({ word, setUpdate }: Props) {
  const { userId, token } = useSelector((state: State) => state.user);
  const [loading, setLoading] = useState(false);

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
        <Tooltip title="Восстановить в учебнике">
          <Button
            loading={loading}
            shape="circle"
            size="large"
            icon={<ToTopOutlined />}
            type="primary"
            onClick={() => {
              setLoading(true);
              Api.deleteUserWord(token, userId, word._id).then((res) => {
                res === 204 && //@ts-ignore
                  setUpdate((prev: any) => !prev);
                Message.success("Слова добавлено в учебник");
                setLoading(false);
              });
            }}
          />
        </Tooltip>

        <Tooltip title="Добавить в сложные">
          <Button
            loading={loading}
            shape="circle"
            size="large"
            icon={<StarFilled />}
            type="primary"
            onClick={() => {
              const body = {
                difficulty: "HARD",
                optional: {
                  rightCount: 0,
                  notRightCount: 0,
                },
              };
              setLoading(true);
              Api.updateUserWord(token, userId, word._id, body).then((res) => {
                res.status === 200 && //@ts-ignore
                  setUpdate((prev: any) => !prev);
                Message.success("Слова добавлено в сложные");
                setLoading(false);
              });
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export function CardHardTextBook({ word, setUpdate }: Props) {
  const { userId, token } = useSelector((state: State) => state.user);
  const [loading, setLoading] = useState(false);

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
        <div className="count">
          <div className="successfully">
            {word.userWord.optional.rightCount}
          </div>
          <div className="unsuccessfully">
            {word.userWord.optional.notRightCount}
          </div>
        </div>
      </div>
      <div className="btnGroup">
        <Tooltip title="Добавить в удаленные">
          <Button
            loading={loading}
            danger
            shape="circle"
            size="large"
            icon={<DeleteOutlined />}
            type="primary"
            onClick={() => {
              setLoading(true);
              const body = {
                difficulty: "DELETED",
                optional: {
                  rightCount: 0,
                  notRightCount: 0,
                },
              };
              Api.updateUserWord(token, userId, word._id, body).then((res) => {
                res.status === 200 &&
                  Message.success("Слова добавлено в удаленные");
                //@ts-ignore
                setUpdate((value) => !value);
              });
            }}
          />
        </Tooltip>

        <Tooltip title="Убрать из сложных">
          <Button
            loading={loading}
            shape="circle"
            size="large"
            icon={<StarOutlined />}
            type="primary"
            onClick={() => {
              setLoading(true);
              const body = JSON.parse(JSON.stringify(word.userWord));
              body.difficulty = "LEARNED";
              Api.updateUserWord(token, userId, word._id, body).then((res) => {
                res.status === 200 &&
                  Message.success("Слова убрано из сложных");
                //@ts-ignore
                setUpdate((value) => !value);
                setLoading(false);
              });
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export function CardLearnTextBook({ word, setUpdate }: Props) {
  const { userId, token } = useSelector((state: State) => state.user);
  const [loading, setLoading] = useState(false);

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
        <div className="count">
          <div className="successfully">
            {word.userWord.optional.rightCount}
          </div>
          <div className="unsuccessfully">
            {word.userWord.optional.notRightCount}
          </div>
        </div>
      </div>

      <div className="btnGroup">
        <Tooltip title="Добавить в удаленные">
          <Button
            loading={loading}
            danger
            shape="circle"
            size="large"
            icon={<DeleteOutlined />}
            type="primary"
            onClick={() => {
              setLoading(true);
              const body = {
                difficulty: "DELETED",
                optional: {
                  rightCount: 0,
                  notRightCount: 0,
                },
              };
              Api.updateUserWord(token, userId, word._id, body).then((res) => {
                res.status === 200 &&
                  Message.success("Слова добавлено в удаленные");
                //@ts-ignore
                setUpdate((value) => !value);
              });
            }}
          />
        </Tooltip>

        <Tooltip title="Добавить в сложные">
          <Button
            loading={loading}
            shape="circle"
            size="large"
            icon={<StarFilled />}
            type="primary"
            onClick={() => {
              setLoading(true);
              const body = JSON.parse(JSON.stringify(word.userWord));
              body.difficulty = "HARD";
              Api.updateUserWord(token, userId, word._id, body).then((res) => {
                res.status === 200 &&
                  Message.success("Слова добавлено в сложные");
                //@ts-ignore
                setUpdate((value) => !value);
                setLoading(false);
              });
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
}
