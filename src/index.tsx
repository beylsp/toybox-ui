import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

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
