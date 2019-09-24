import React from "react";
import AppBar from "./components/AppBarExample";
import Board from "./containers/Board";

import Card from "./components/Card";
const App = props => (
  <div>
    <AppBar />
    <Card />
    <Board />
  </div>
);

export default App;
