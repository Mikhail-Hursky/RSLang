import React from "react";
import { render } from "react-dom";
import "normalize.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducer/rootReducer";
import createLogger from "redux-logger";
import "antd/dist/antd.css";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const logger = createLogger;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger), composeEnhancers())
);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
