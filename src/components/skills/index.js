import React, { Component } from 'react';

export default class Skills extends Component {
  handleChange(event) {
    this.setState({ event: event.target.value });
  } // IN HERE FOR A FORM TO ADD AND REMOVE SKILLS

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    // WILL USE FIREBASE FOR SKILLS TEMP DATA:
    const skills = [
      'Javascript',
      'React',
      'Node',
      'jQuery',
      'Express',
      'Firebase',
    ];
    return (
      <div>
        {skills.map(skill => (
          <ul>{skill}</ul>
        ))}
      </div>
    );
  }
}
