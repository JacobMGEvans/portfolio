import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

export default class Skills extends Component {
  state = {
    toggled: false,
    text: '',
  };

  handleChange(event) {
    this.setState({ event: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
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
