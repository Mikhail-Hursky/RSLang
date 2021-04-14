import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  PlayCircleOutlined,
  SettingOutlined,
  PieChartOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  LineChartOutlined,
  BookOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const message = useSelector((state: State) => state.user.message);

  return (
    <>
      <Layout.Sider
        theme="dark"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{ zIndex: 1 }}
      >
        <Menu mode="inline" selectedKeys={[location.pathname]} theme="dark">
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <NavLink to="/">Главная</NavLink>
          </Menu.Item>
          {message === "Authenticated" ? (
            <>
              <Menu.Item key="/learning" icon={<PieChartOutlined />}>
                <NavLink to="/learning">Изучение</NavLink>
              </Menu.Item>
              <Menu.Item key="/dictionary" icon={<BookOutlined />}>
                <NavLink to="/dictionary">Словарь</NavLink>
              </Menu.Item>
              <Menu.Item key="/games" icon={<PlayCircleOutlined />}>
                <NavLink to="/games">Игры</NavLink>
              </Menu.Item>
              <Menu.Item key="/statistic" icon={<LineChartOutlined />}>
                <NavLink to="/statistic">Статистика</NavLink>
              </Menu.Item>
              <Menu.Item key="/setting" icon={<SettingOutlined />}>
                <NavLink to="/setting">Настройки</NavLink>
              </Menu.Item>
            </>
          ) : (
            <></>
          )}
          <Menu.Item key="/team" icon={<TeamOutlined />}>
            <NavLink to="/team">Команда</NavLink>
          </Menu.Item>
          <Menu.Item key="/info" icon={<InfoCircleOutlined />}>
            <NavLink to="/info">Информация</NavLink>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    </>
  );
}
