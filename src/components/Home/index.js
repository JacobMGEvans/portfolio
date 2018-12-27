import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <Link to="/about"> About </Link>
        </nav>
        <section>HOME PAGE INFO</section>
      </Fragment>
    );
  }
}
