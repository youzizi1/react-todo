import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Todo from "./Todo";

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root")
);
