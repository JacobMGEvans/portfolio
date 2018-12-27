import React, { Component } from "react";
import ReactDom from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./src/components/about";
import Skills from "./src/components/skills";
import Home from "./src/components/Home";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById(`root`));
