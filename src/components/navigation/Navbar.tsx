import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {

  return (
    <>
      <div className="wrap-nav hidden" onClick={toggleMenu}>
      </div>
      <nav className="navigation menu-nofull">
        <ul>
          <li className="icon-menu">
            <span className="material-icons icon" onClick={toggleMenu}>close</span>
          </li>
          <li>
            <Link to="/">
              <span className="material-icons icon" title="Главная">home</span>
              <span className="item">Главная</span>
            </Link>
          </li>
          <li>
            <Link to="/learning">
              <span className="material-icons icon" title="Изучение">spellcheck</span>
              <span className="item">Изучение</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="material-icons icon" title="Словарь">auto_stories</span>
              <span className="item">Словарь</span>
            </Link>
          </li>
          <li>
            <Link to="/game">
              <span className="material-icons icon" title="Игры">sports_esports</span>
              <span className="item">Игры</span>
            </Link>
          </li>
          <li>
            <Link to="/statistic">
              <span className="material-icons icon" title="Статистика">leaderboard</span>
              <span className="item">Статистика</span>
            </Link>
          </li>
          <li>
            <Link to="/statistic">
              <span className="material-icons icon" title="Настройки">settings_suggest</span>
              <span className="item">Настройки</span>
            </Link>
          </li>
          <li>
            <Link to="/statistic">
              <span className="material-icons icon" title="Команда">groups</span>
              <span className="item">Команда</span>
            </Link>
          </li>
          <li>
            <Link to="/statistic">
              <span className="material-icons icon" title="Информация">info</span>
              <span className="item">Информация</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function toggleMenu(e: any): any {
  const parentMenu = document.querySelector('.wrap-nav');
  const menu = document.querySelector('.navigation');
  const icon = document.querySelector('.icon-menu span');
  if(parentMenu && menu && icon) {
    if(parentMenu.classList.contains('hidden')) {
      parentMenu.classList.remove('hidden');
      icon.textContent = 'close';
      menu.classList.remove('menu-nofull');
    } else if (!parentMenu.classList.contains('hidden')) {
      parentMenu.classList.add('hidden');
      icon.textContent = 'menu';
      menu.classList.add('menu-nofull');
    }
  }
}
