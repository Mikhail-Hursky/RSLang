import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

export default function Home() {
  return (
    <div className="wrap-home">
      <div className="col-right">
        <div className="description">
          <p>
            Приложение для изучения иностранных слов, включающее электронный
            учебник с базой слов для изучения, игры для их повторения и
            возможности отслеживания индивидуального прогресса
          </p>
        </div>
        <Link to="/info">
          <div className="button">
            <button>узнать о приложении</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
