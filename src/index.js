import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Styles
import "./index.css";

//Redux
import Thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./store";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(Thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
