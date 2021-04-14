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
  const [updateDelete, setUpdateDelete] = useState(false);
  const [updateLearn, setUpdateLearn] = useState(false);
  const [updateHard, setUpdateHard] = useState(false);
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

    color: "#fff",
    padding: '30px 0 10px',
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
  }, [updateDelete, updateLearn, updateHard]);

  return (
    <>
      <Carousel dotPosition="top">
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Изученные слова</h3>
          </div>
          <div className="slide-one" style={{ padding: "10px" }}>
            {learnWords ? (
              <>
                {learnWords.length > 0 ? (
                  <>
                    {learnWords
                      .slice((pageLearn - 1) * 20, pageLearn * 20)
                      .map((word: any) => {
                        return (
                          <CardLearnTextBook
                            setUpdate={setUpdateLearn}
                            key={word._id}
                            word={word}
                          />
                        );
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
          <div className="slide-two" style={{ padding: "10px" }}>
            {hardWords ? (
              <>
                {hardWords.length > 0 ? (
                  <>
                    {hardWords
                      .slice((pageHard - 1) * 20, pageHard * 20)
                      .map((word: any) => {
                        return (
                          <CardHardTextBook
                            setUpdate={setUpdateHard}
                            key={word._id}
                            word={word}
                          />
                        );
                      })}
                    <Pagination
                      onChange={hardOnChange}
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
          <div className="slide-three" style={{ padding: "10px" }}>
            {deleteWords ? (
              <>
                {deleteWords.length > 0 ? (
                  <>
                    {deleteWords
                      .slice((pageDelete - 1) * 20, pageDelete * 20)
                      .map((word: any) => {
                        return (
                          <CardDeleteTextBook
                            setUpdate={setUpdateDelete}
                            key={word._id}
                            word={word}
                          />
                        );
                      })}
                    <Pagination
                      onChange={deleteOnChange}
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
