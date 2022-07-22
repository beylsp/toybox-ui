import React from "react";

import ReactDOM from "react-dom";

import App from "./app/App";

import "./index.css";

const Root = (): JSX.Element => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const rootNode = document.getElementById("root");

if (rootNode) {
  ReactDOM.render(<Root />, rootNode);
}

export default Root;
