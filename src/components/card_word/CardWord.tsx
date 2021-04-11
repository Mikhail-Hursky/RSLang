import { DeleteOutlined, SoundOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Space, Tooltip } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useState } from "react";
import { Word } from "../../interfaces/Words";
import { Api, URL } from "../../api/Api";
import { message as Message } from "antd";
import Title from "antd/lib/typography/Title";
import { soundWord } from "../../sound/sound";
import Text from "./Text";
import "./CardWord.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducer/rootReducer";
import { setUserWords } from "../../redux/action/userAction";

interface Props {
  word: Word;
  color: string;
}

export default function CardWord({ word, color }: Props) {
  const dispatch = useDispatch();
  const { message, token, userId } = useSelector((state: State) => state.user);
  const [isLoadingDelete, setLoadingDelete] = useState(false);
  const [isLoadingHard, setLoadingHard] = useState(false);

  return (
    <>
      <Card
        className="CardWord"
        style={{ borderColor: color }}
        cover={<img alt="example" src={URL + word.image} />}
        actions={[
          <Tooltip title="Добавить слово в сложные">
            <Button
              style={{ width: "90%" }}
              size="large"
              type="primary"
              icon={<StarOutlined />}
              loading={isLoadingHard}
              disabled={isLoadingDelete}
              onClick={() => {}}
            />
          </Tooltip>,
          <Tooltip title="Удалить слово из изучения">
            <Button
              loading={isLoadingDelete}
              disabled={isLoadingHard}
              danger
              style={{ width: "90%" }}
              size="large"
              type="primary"
              icon={<DeleteOutlined />}
              onClick={() => {}}
            />
          </Tooltip>,
        ]}
      >
        <Meta
          title={[
            <Title style={{ margin: 0 }} level={3}>
              {word.word}
            </Title>,
          ]}
          description={[
            <Space style={{ marginBottom: "10px" }}>
              <Title level={5}>{word.transcription}</Title>
              <Button
                size="small"
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={() => soundWord(URL + word.audio)}
              />
            </Space>,
          ]}
        />
        <div>
          <Text
            text={word.textExample}
            textTranslate={word.textExampleTranslate}
            audio={word.audioExample}
          />
        </div>
        <div>
          <Text
            text={word.textMeaning}
            textTranslate={word.textMeaningTranslate}
            audio={word.audioMeaning}
          />
        </div>
      </Card>
    </>
  );
}
