import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <li><span className="material-icons icon">close</span></li>
        <li>
          <Link to="/"><span className="material-icons icon">home</span><span>Главная</span></Link>
        </li>
        <li>
          <Link to="/"><span className="material-icons icon">spellcheck</span><span>Изучение</span></Link>
        </li>
        <li>
          <Link to="/"><span className="material-icons icon">auto_stories</span><span>Словарь</span></Link>
        </li>
        <li>
          <Link to="/game"><span className="material-icons icon">sports_esports</span><span>Игры</span></Link>
        </li>
        <li>
          <Link to="/statistic"><span className="material-icons icon">leaderboard</span><span>Статистика</span></Link>
        </li>
        <li>
          <Link to="/statistic"><span className="material-icons icon">settings_suggest</span><span>Настройки</span></Link>
        </li>
        <li>
          <Link to="/statistic"><span className="material-icons icon">groups</span><span>Команда</span></Link>
        </li>
        <li>
          <Link to="/statistic"><span className="material-icons icon">info</span><span>О приложении</span></Link>
        </li>
      </ul>
    </nav>
  );
}
