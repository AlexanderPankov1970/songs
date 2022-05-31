import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App.js";
import reducers from "./reducers";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
