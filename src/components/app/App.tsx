import Navbar from "../navigation/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { counterPlus, counterMinus } from "../../redux/action/settingAction";
import { State } from "../../redux/reducer/rootReducer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <div className="HEADER">HEADER</div>
          <div className="CONTENT">
            <Switch>
              <Route path="/game" component={About} />
              <Route path="/statistic" component={Users} />
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
    <>
      <h2>Home</h2>
      <button onClick={() => dispatch(counterPlus())}>+++</button>
      <button onClick={() => dispatch(counterMinus())}>---</button>
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

export default App;
