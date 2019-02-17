import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";

import Routing from "./src/components/router";
import Footer from "./src/components/footer";
import Header from "./src/components/header";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routing />
        <Footer />
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById(`root`));
