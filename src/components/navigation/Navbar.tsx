import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Layout.Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    </>
  );
}

function toggleMenu(e: any): any {
  const parentMenu = document.querySelector(".wrap-nav");
  const menu = document.querySelector(".navigation");
  const icon = document.querySelector(".icon-menu span");
  if (parentMenu && menu && icon) {
    if (parentMenu.classList.contains("hidden")) {
      parentMenu.classList.remove("hidden");
      icon.textContent = "close";
      menu.classList.remove("menu-nofull");
    } else if (!parentMenu.classList.contains("hidden")) {
      parentMenu.classList.add("hidden");
      icon.textContent = "menu";
      menu.classList.add("menu-nofull");
    }
  }
}

/* 
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
      <Link to="/">
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
</nav> */
