import React from "react";
import ReactDOM from "react-dom";
import Application from "./Application";
import { store } from './store/index';
import { Provider } from 'react-redux';
import "./index.css";

const App = () => <Application />;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById("app")
);
