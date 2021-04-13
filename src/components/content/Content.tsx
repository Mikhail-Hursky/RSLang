import React from "react";
import { Button, Layout, Result } from "antd";
import { Link, Route, Switch } from "react-router-dom";
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
import Promo from "../promo/Promo";

import Sprint from "../sprint_game/Sprint";
import Statistic from "../statistic/Statistic";
import { State } from "../../redux/reducer/rootReducer";
import { useSelector } from "react-redux";

export default function Content() {
  const message = useSelector((state: State) => state.user.message);
  return (
    <>
      <Layout.Content id="game_fullscreen">
        <Switch>
          <Route path="/team" component={Team} />
          <Route path="/info" component={Promo} />
          <Route exact path="/" component={Home} />

          {message === "Authenticated" ? (
            <>
              <Route exact path="/games" component={Games} />
              <Route path="/statistic" component={Statistic} />
              <Route path="/learning" component={Learning} />
              <Route path="/dictionary" component={Vocabulary} />
              <Route path="/setting" component={Settings} />
              <Route path="/games/audiocall" component={AudioCall} />
              <Route path="/games/savannah" component={Savannah} />
              <Route path="/games/ourgame" component={Ourgame} />
              <Route path="/games/sprint" component={Sprint} />
              <Route path="/categories" component={Category} />
            </>
          ) : (
            <></>
          )}
          <Route path="*">
            <Result
              status="404"
              title="404"
              subTitle="Извините, страница, которую вы посетили, не существует."
              extra={
                <Link to="/">
                  <Button type="primary">Вернуться домой</Button>
                </Link>
              }
            />
            ,
          </Route>
        </Switch>
      </Layout.Content>
    </>
  );
}
