import { Carousel } from "antd";
import React, { useEffect } from "react";
import { Api } from "../../api/Api";
import CatergoryWordsBook from "../category_wordsbook/CatergoryWordsBook";
import PositionCarouselDemo from "../slider/Slider";

export default function WordsBook() {
  useEffect(() => {
    
  }, []);

  const contentStyle: React.CSSProperties = {
    height: "100px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel dotPosition="top" className="WordsBook_Carousel">
      <div>
        <h2 style={contentStyle}>Учебник</h2>
        <CatergoryWordsBook />
      </div>
      <div>
        <h2 style={contentStyle}>Словарь</h2>
        <PositionCarouselDemo />
      </div>
    </Carousel>
  );
}
