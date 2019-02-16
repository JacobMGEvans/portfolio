import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    firstName: ``,
    lastName: ``,
    phone: ``,
    email: ``,
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name!"
          value={this.state.firstName}
          onChange={this.handleChange.bind(this)}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name!"
          value={this.state.lastName}
          onChange={this.handleChange.bind(this)}
        />
      </form>
    );
  }
}
