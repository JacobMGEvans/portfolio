import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);
  const [comment, setComment] = useState(``);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, phone, email, comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first name">
        First Name:
        <input
          type="text"
          name="firstName"
          placeholder="First Name!"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label htmlFor="last name">
        Last Name:
        <input
          type="text"
          name="lastName"
          placeholder="Last Name!"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      Phone Number:
      <label htmlFor="phone number">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="Comment Text Area">
        Comment:
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <button type="submit" value="Submit">
        Submit!
      </button>
    </form>
  );
};
export default ContactForm;
