import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Games from "../games/Games";
import Learning from "../learning/Learning";
import Settings from "../settings/Settings";
import Home from "../home/Home";
import AudioCall from "../audiocall/AudioCall";

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
        </Switch>
      </Layout.Content>
    </>
  );
}

function Users() {
  return <h2>statistic</h2>;
}
