import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./style";

const ContactForm = ({ styleProps }) => {
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);
  const [comment, setComment] = useState(``);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, phone, email, comment);
  };

  const { mainContainer } = styles;
  return (
    <form onSubmit={handleSubmit} style={{ ...styleProps, mainContainer }}>
      <TextField
        label="First Name"
        id="firstname"
        type="text"
        name="firstName"
        placeholder="First Name!"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <TextField
        label="Last Name"
        id="lastname"
        type="text"
        name="lastName"
        placeholder="Last Name!"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Phone Number"
        id="phone-number"
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <TextField
        label="example@gmail.com"
        id="email"
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <TextField
        id="comment"
        label="comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button type="submit" value="Submit">
        Submit!
      </button>
    </form>
  );
};
export default ContactForm;
