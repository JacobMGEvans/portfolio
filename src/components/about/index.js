import React, {
  Component, Fragment, lazy, Suspense,
} from "react";
import SVGInline from "react-svg-inline";
import twitterLogo from "../../assets/images/Twitter_Logo_Blue.svg";
import linkedInLogo from "../../assets/images/iconmonstr-linkedin-3.svg";

const Skills = lazy(() => import(`../skills`));

export default class About extends Component {
  state = {
    display: false,
    socialImages: [twitterLogo, linkedInLogo],
    socialLinks: [
      `https://twitter.com/JacobMGEvans?lang=en`,
      `https://www.linkedin.com/in/jacob-m-g-evans/`,
    ],
  };

  handleClick = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  render() {
    const { handleClick } = this;
    const { display, socialImages, socialLinks } = this.state;

    return (
      // need a headshot or just use the same one I have been using.
      <Suspense fallback={<div>...Loading</div>}>
        <section>
          <img src="" alt="self-portrait" />
          <div>
            <aside>
              <button onClick={handleClick}>Skills</button>
              {display ? <Skills /> : null}
            </aside>

            <p>Something about Me. The Skills, Projects</p>
            {socialImages.map((render, ind) => (
              <a href={socialLinks[ind]} key={ind + Math.random()}>
                <SVGInline svg={socialImages[ind]} key={ind + Math.random()} />
              </a>
            ))}
          </div>
        </section>
      </Suspense>
    );
  }
}
