import { Layout } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../../redux/reducer/rootReducer";

import Category from "../category/Category";
import Games from "../games/Games";
import Learning from "../learning/Learning";
import Settings from "../settings/Settings";
import Home from "../home/Home";

export default function Content() {
  return (
    <>
      <Layout.Content style={{ margin: "0 16px" }}>
        <Switch>
          <Route path="/games" component={Games} />
          <Route path="/statistic" component={Users} />
          <Route path="/learning" component={Learning} />
          <Route path="/dictionary" component={Home} />
          <Route path="/setting" component={Settings} />
          <Route path="/team" component={Home} />
          <Route path="/info" component={Home} />
          <Route path="/categories" component={Category} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout.Content>
    </>
  );
}

function About() {
  const counter = useSelector((state: State) => state.setting.word);
  return <h2>GAME {counter}</h2>;
}

function Users() {
  return <h2>statistic</h2>;
}
