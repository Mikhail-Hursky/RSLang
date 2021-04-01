import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Games from "../games/Games";
import Learning from "../learning/Learning";
import Settings from "../settings/Settings";
import Home from "../home/Home";
import AudioCall from "../audiocall/AudioCall";
import Category from "../category/Category";
import Savannah from "../savannah_game/Savannah";
import Ourgame from "../our_game/Ourgame";

export default function Content() {
  return (
    <>
      <Layout.Content>
        <Switch>
          <Route exact path="/games" component={Games} />
          <Route path="/statistic" component={Users} />
          <Route path="/learning" component={Learning} />
          <Route path="/dictionary" component={Home} />
          <Route path="/setting" component={Settings} />
          <Route path="/team" component={Home} />
          <Route path="/info" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/games/audiocall" component={AudioCall} />
          <Route path="/games/savannah" component={Savannah} />
          <Route path="/games/ourgame" component={Ourgame} />
          <Route path="/categories" component={Category} />
        </Switch>
      </Layout.Content>
    </>
  );
}

function Users() {
  return <h2>statistic</h2>;
}
