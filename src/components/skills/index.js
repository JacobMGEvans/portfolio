import React, { Component } from "react";

export default class Skills extends Component {
  state = {
    firstName: ``,
  };

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
      `Express`,
      `Firebase`,
      `GraphQL`,
      `MongoDB`,
      `HTML5`,
      `CSS3`,
    ];
    return (
      <section>
        {skills.map((skill, ind) => (
          <ul key={`${ind * Math.random()} `}>{skill}</ul>
        ))}
      </section>
    );
  }
}
