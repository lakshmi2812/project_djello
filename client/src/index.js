/////
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { board } from "./reducers";
import {
  getBOARDSRequest,
  getBOARDSSuccess,
  getBOARDSFailure,
  getInitialBOARDS
} from "./actions";

let store = createStore(board, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
