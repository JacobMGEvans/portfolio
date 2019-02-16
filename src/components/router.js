import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./about";
import Home from "./home";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}
