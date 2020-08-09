import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import postReducer from "./redux/reducer";
import { Provider } from "react-redux";
import Main from "./Components/Main";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";
import { database } from "./database/config";

const element = React.createElement("h1", null, "Hello World!");

const middleware = [thunk];

/* const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  )
); */

let store;
const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
