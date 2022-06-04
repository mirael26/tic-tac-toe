import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/store";

import App from "./components/app/app";
import './main.scss';


const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);