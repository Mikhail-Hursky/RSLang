import React, { useEffect, useState } from "react";
import { Carousel, Pagination, Spin } from "antd";

import "./Slider.scss";
import {
  CardDeleteTextBook,
  CardHardTextBook,
  CardLearnTextBook,
} from "../card_textbook/CardTextBook";
import { State } from "../../redux/reducer/rootReducer";
import { useSelector } from "react-redux";
import { Api } from "../../api/Api";

export default function PositionCarouselDemo() {
  const { token, userId } = useSelector((state: State) => state.user);
  const [deleteWords, setDeleteWords] = useState<null | []>(null);
  const [learnWords, setLearnWords] = useState<null | []>(null);
  const [hardWords, setHardWords] = useState<null | []>(null);
  const [pageDelete, setPageDelete] = useState(1);
  const [pageLearn, setPageLearn] = useState(1);
  const [pageHard, setPageHard] = useState(1);

  const deleteOnChange = (e: any) => {
    window.scrollTo(0, 0);
    setPageDelete(e);
  };

  const learnOnChange = (e: any) => {
    window.scrollTo(0, 0);
    setPageLearn(e);
  };
  const hardOnChange = (e: any) => {
    window.scrollTo(0, 0);
    setPageHard(e);
  };

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    backgroundColor: "#DDD",
  };

  useEffect(() => {
    Api.getAllDeleteUserWord(userId, token).then((res) =>
      setDeleteWords(res.data)
    );
    Api.getAllLearnUserWord(userId, token).then((res) =>
      setLearnWords(res.data)
    );
    Api.getAllHardUserWord(userId, token).then((res) => setHardWords(res.data));
  }, []);

  return (
    <>
      <Carousel dotPosition="top">
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Изученные слова</h3>
          </div>
          <div style={{ padding: "10px" }}>
            {learnWords ? (
              <>
                {learnWords.length > 0 ? (
                  <>
                    {learnWords
                      .slice((pageLearn - 1) * 20, pageLearn * 20)
                      .map((word: any) => {
                        return <CardLearnTextBook key={word._id} word={word} />;
                      })}
                    <Pagination
                      onChange={learnOnChange}
                      total={learnWords.length}
                      defaultPageSize={20}
                      defaultCurrent={1}
                      showSizeChanger={false}
                    />
                  </>
                ) : (
                  <>
                    <h2>У вас пока нет изученных слов</h2>
                  </>
                )}
              </>
            ) : (
              <Spin size="large" />
            )}
          </div>
        </div>
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Сложные слова</h3>
          </div>
          <div style={{ padding: "10px" }}>
            {hardWords ? (
              <>
                {hardWords.length > 0 ? (
                  <>
                    {hardWords
                      .slice((pageLearn - 1) * 20, pageLearn * 20)
                      .map((word: any) => {
                        return <CardHardTextBook key={word._id} word={word} />;
                      })}
                    <Pagination
                      onChange={learnOnChange}
                      total={hardWords.length}
                      defaultPageSize={20}
                      defaultCurrent={1}
                      showSizeChanger={false}
                    />
                  </>
                ) : (
                  <>
                    <h2>У вас пока нет сложных слов</h2>
                  </>
                )}
              </>
            ) : (
              <Spin size="large" />
            )}
          </div>
        </div>
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Удаленные слова</h3>
          </div>
          <div style={{ padding: "10px" }}>
            {deleteWords ? (
              <>
                {deleteWords.length > 0 ? (
                  <>
                    {deleteWords
                      .slice((pageLearn - 1) * 20, pageLearn * 20)
                      .map((word: any) => {
                        return <CardDeleteTextBook key={word._id} word={word} />;
                      })}
                    <Pagination
                      onChange={learnOnChange}
                      total={deleteWords.length}
                      defaultPageSize={20}
                      defaultCurrent={1}
                      showSizeChanger={false}
                    />
                  </>
                ) : (
                  <>
                    <h2>У вас пока нет удалленых слов</h2>
                  </>
                )}
              </>
            ) : (
              <Spin size="large" />
            )}
          </div>
        </div>
      </Carousel>
    </>
  );
}
