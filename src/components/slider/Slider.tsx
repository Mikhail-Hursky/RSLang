import React, { useEffect } from "react";
import { Card, Carousel } from "antd";

import "./Slider.scss";
import CardTextBook from "../card_textbook/CardTextBook";
import { State } from "../../redux/reducer/rootReducer";
import { useSelector } from "react-redux";
import { Api } from "../../api/Api";

export default function PositionCarouselDemo() {
  const { token, userId } = useSelector((state: State) => state.user);
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    backgroundColor: "#DDD",
  };

  useEffect(() => {
    Api.getAllUserWord(token, userId);
  },[]);

  return (
    <>
      <Carousel dotPosition="top">
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Изученные слова</h3>
          </div>
        </div>
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Сложные слова</h3>
          </div>
        </div>
        <div>
          <div className="slide" style={contentStyle}>
            <h3>Удаленные слова</h3>
          </div>
          <div style={{ padding: "5px" }}>
            <CardTextBook />
          </div>
        </div>
      </Carousel>
    </>
  );
}
