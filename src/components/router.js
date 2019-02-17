import React, { Component, Fragment } from "react";
import { Router } from "@reach/router";

import About from "./about";
import Home from "./home";

export default class Routing extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Home exact path="/" component={Home} />
          <About exact path="/about" component={About} />
        </Router>
      </Fragment>
    );
  }
}
