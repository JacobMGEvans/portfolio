import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    firstName: ``,
    lastName: ``,
    phone: ``,
    email: ``,
    comment: ``,
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const {
      firstName, lastName, phone, email, comment,
    } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name!"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name!"
          value={lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <label>
          Comment:
          <textarea value={comment} onChange={handleChange} />
        </label>
      </form>
    );
  }
}
