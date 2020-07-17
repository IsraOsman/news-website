import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Form from "./Components/Form";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Grid} />
          <Route path="/publish" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
