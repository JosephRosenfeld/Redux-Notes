import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; //import Provider
import { store } from "./redux/store"; //import store

/* in order to utilize redux and global state management we need to utilize something
called a Provider which is another component that takes in a props of the store that 
we created in store.js, this is what gives the entire app access to the store*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(App, document.getElementById("root2"));
