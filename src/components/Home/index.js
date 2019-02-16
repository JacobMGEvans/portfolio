import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <Link to="/about"> About </Link>
          </nav>
        </header>
        <h1>Jacob M-G Evans</h1>
        <h2>
          Full-Stack JavaScript Developer | Air Force Veteran | Hardware
          Enthusiast | Outdoorsman
        </h2>

        <section>
          <p>
            As a Developer, I am an ambitious individual that seeks
            opportunities that foster my growth and experience as a software
            engineer to continue to expand my knowledge and skill base in the
            software engineering field to drive forward my passion to improve my
            community and environment with technology. My passions are in both
            technology, nature, also service and protection to the community.
            While camping, hiking, fishing or any other activities are a great
            part of my life, so is the software engineering, gaming, and
            hardware enthusiast. JavaScipt, NodeJS, ExpressJS, MongoDB, ReactJS,
            SCSS, CSS3, HTML, SQL, etc...
          </p>
        </section>
      </Fragment>
    );
  }
}