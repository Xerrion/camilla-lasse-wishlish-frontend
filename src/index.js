import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { reducers } from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
