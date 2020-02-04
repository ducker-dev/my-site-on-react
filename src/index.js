import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import changeState from "./Redux/reducers";

const store = createStore(changeState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
