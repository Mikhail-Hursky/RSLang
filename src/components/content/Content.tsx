import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Games from "../games/Games";
import Learning from "../learning/Learning";
import Settings from "../settings/Settings";
import Home from "../home/Home";
import AudioCall from "../audiocall/AudioCall";
import Category from "../category/Category";
import Vocabulary from "../vocabulary/Vocabulary";
import Savannah from "../savannah_game/Savannah";
import Ourgame from "../our_game/Ourgame";

import Team from "../team/Team";

import Sprint from "../sprint_game/Sprint";
import WordsBook from "../words_book/WordsBook";
import Statistic from "../statistic/Statistic";


export default function Content() {
  return (
    <>
      <Layout.Content id="game_fullscreen">
        <Switch>
          <Route exact path="/games" component={Games} />
          <Route path="/statistic" component={Statistic} />
          <Route path="/learning" component={Learning} />
          <Route path="/dictionary" component={Vocabulary} />
          <Route path="/setting" component={Settings} />
          <Route path="/team" component={Team} />
          <Route path="/info" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/games/audiocall" component={AudioCall} />
          <Route path="/games/savannah" component={Savannah} />
          <Route path="/games/ourgame" component={Ourgame} />
          <Route path="/games/sprint" component={Sprint} />
          <Route path="/categories" component={Category} />
        </Switch>
      </Layout.Content>
    </>
  );
}