import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./App";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <AppRoot />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
