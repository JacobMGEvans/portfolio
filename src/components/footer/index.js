import React, { Component } from "react";
import SVGInline from "react-svg-inline";

import twitterLogo from "../../assets/images/Twitter_Logo_Blue.svg";
import linkedInLogo from "../../assets/images/iconmonstr-linkedin-3.svg";

import ContactForm from "../contact-form";
import style from "./style";

export default class Footer extends Component {
  state = {
    socialImages: [twitterLogo, linkedInLogo],
    socialLinks: [
      `https://twitter.com/JacobMGEvans?lang=en`,
      `https://www.linkedin.com/in/jacob-m-g-evans/`,
    ],
  };

  render() {
    const { socialContainer, icons, mainContainer } = style;
    const { socialImages, socialLinks } = this.state;
    return (
      <footer style={{ ...socialContainer, ...mainContainer }}>
        {socialImages.map((render, ind) => (
          <a
            href={socialLinks[ind]}
            key={ind + Math.random()}
            style={{ ...icons }}
          >
            <SVGInline svg={socialImages[ind]} key={ind + Math.random()} />
          </a>
        ))}
        <ContactForm />
      </footer>
    );
  }
}
