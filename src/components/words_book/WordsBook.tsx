import { Carousel } from "antd";
import React, { useEffect } from "react";
import { Api } from "../../api/Api";
import Category from "../category/Category";
import "./WordsBook.scss";

export default function WordsBook() {
  useEffect(() => {
    Api.getGroupsArr(1).then((groups) => {
      console.log(groups);
    });
  }, []);
  return (
    <Carousel dotPosition="top" className="WordsBook_Carousel">
      <div>
        <Category />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Словарь</h2>
      </div>
    </Carousel>
  );
}
