import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TelaLogin from "./components/TelaLogin";
import TelaRegistro from "./components/TelaRegistro";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TelaLogin} />
        <Route path="/registro" component={TelaRegistro} />
      </Switch>
    </Router>
  );
}

export default App;
