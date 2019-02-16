import React, { Component } from "react";
import ReactDom from "react-dom";

import Routing from "./src/components/router";
import Footer from "./src/components/footer";
import Header from "./src/components/header";
import Home from "./src/components/home";
import About from "./src/components/about";

export default class App extends Component {
  render() {
    return (
      <Routing>
        <Header />
        <Home />
        <About />
        <Footer />
      </Routing>
    );
  }
}

ReactDom.render(<App />, document.getElementById(`root`));
