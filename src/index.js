import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { createStore } from "redux";
import counterApp from "./reducers/index";
import { Provider } from "react-redux";

let store = createStore(
  counterApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
