import React from "react";
import ReactDOM from "react-dom";
import Application from "./Application"

export default (el, props) => {
  ReactDOM.render(<Application {...props}/>, el);
};
