import { Layout } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { counterMinus, counterPlus } from "../../redux/action/settingAction";
import { State } from "../../redux/reducer/rootReducer";

export default function Content() {
  return (
    <>
      <Layout.Content style={{ margin: "0 16px" }}>
        <Switch>
          <Route path="/game" component={About} />
          <Route path="/statistic" component={Users} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout.Content>
    </>
  );
}

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-left">
        <h2>Home</h2>
        <button onClick={() => dispatch(counterPlus())}>+++</button>
        <button onClick={() => dispatch(counterMinus())}>---</button>
      </div>
      <div className="col-right">
        <div className="description">
          <p>
            Приложение для изучения иностранных слов, включающее электронный
            учебник с базой слов для изучения, игры для их повторения и
            возможности отслеживания индивидуального прогресса
          </p>
        </div>
        <div className="button">
          <button>узнать о приложении</button>
        </div>
      </div>
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
