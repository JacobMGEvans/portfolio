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
    socialIcons: [twitterLogo, linkedInLogo],
  };

  handleClick = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  render() {
    const { handleClick } = this;
    const { display, socialIcons } = this.state;

    return (
      // need a headshot or just use the same one I have been using.
      <Suspense fallback={<div>...Loading</div>}>
        <div>
          <img src="" alt="" />
          <div>
            <Fragment>
              <button onClick={handleClick}>Skills</button>
              {display ? <Skills /> : null}
            </Fragment>
            <section>
              Something about Me. The Skills, Projects, ect. will
              <main>Summary and Bio will go here</main>
              using some anchor to the text or images.
            </section>
            {socialIcons.map(icon => (
              <SVGInline svg={icon} />
            ))}
          </div>
        </div>
      </Suspense>
    );
  }
}
