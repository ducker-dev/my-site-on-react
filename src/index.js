import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { changeTheme } from "./Store/reducers";

const store = createStore(changeTheme);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
