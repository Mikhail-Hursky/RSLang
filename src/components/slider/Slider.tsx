import React from "react";
import { Carousel, Radio } from "antd";

import "./Slider.scss";

export default function PositionCarouselDemo() {
  const [dotPosition, setDotPosition] = React.useState("top");
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    backgroundColor: "#DDD",
  };

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
        </div>
      </Carousel>
    </>
  );
}
