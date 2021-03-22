import Navbar from "../navigation/Navbar";
import Header from "../header/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { counterPlus, counterMinus } from "../../redux/action/settingAction";
import { State } from "../../redux/reducer/rootReducer";
import Learning from "../learning/Learning";
import Games from "../games/Games";
import Settings from "../settings/Settings";

function App() {
  return (
   <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Header />
          <div className="content">
            <Switch>
              <Route path="/learning" component={Learning} />
              <Route path="/game" component={Games} />
              <Route path="/statistic" component={Users} />
              <Route path="/settings" component={Settings} />
              <Route path="/vocabluary" component={About} />
              <Route path="/info" component={About} />
              <Route path="/team" component={Games} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  const dispatch = useDispatch();
  return (
    <div className="wrap-home">
      <div className="col-left">
        <h2>Home</h2>
        <button onClick={() => dispatch(counterPlus())}>+++</button>
        <button onClick={() => dispatch(counterMinus())}>---</button>
      </div>
      <div className="col-right">
        <div className="description">
          <p>Приложение для изучения иностранных слов, включающее электронный учебник с базой слов для изучения, игры для их повторения и возможности отслеживания индивидуального прогресса</p>
        </div>
        <div className="button">
          <button>узнать о приложении</button>
        </div>
      </div>
    </div>
  );
}

function About() {
  const counter = useSelector((state: State) => state.setting.word);
  return <h2>GAME {counter}</h2>;
}

function Users() {
  return <h2>statistic</h2>;
}

export default App;
