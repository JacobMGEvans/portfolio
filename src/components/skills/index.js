import React, { Component, Fragment } from "react";

export default class Skills extends Component {
  handleChange(e) {
    e.preventDefault();
    this.setState({});
  } // IN HERE FOR A FORM TO ADD AND REMOVE SKILLS

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    // WILL USE FIREBASE FOR SKILLS TEMP DATA:
    const skills = [
      `Javascript`,
      `React`,
      `Node`,
      `jQuery`,
      `Express`,
      `Firebase`,
      `GraphQL`,
    ];
    return (
      <Fragment>
        {skills.map((skill, ind) => (
          <ul key={`${ind * Math.random()} `}>{skill}</ul>
        ))}
      </Fragment>
    );
  }
}
