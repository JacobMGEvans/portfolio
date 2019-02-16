import React, { Component, lazy, Suspense } from "react";

import jacobImage from "../../assets/images/jacobPortrait.jpg";

import style from "./style";

const Skills = lazy(() => import(`../skills`));

export default class About extends Component {
  state = {
    display: false,
  };

  handleClick = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  render() {
    const { handleClick } = this;
    const { display } = this.state;
    const { imageContainer } = style;
    return (
      <Suspense fallback={<div>...Loading</div>}>
        <section>
          <img
            src={jacobImage}
            alt="self-portrait"
            style={{ ...imageContainer }}
          />
          <div>
            <aside>
              ASIDE
              <button onClick={handleClick}>Skills</button>
              {display ? <Skills /> : null}
            </aside>

            <p>Something about Me. The Skills, Projects</p>
          </div>
        </section>
      </Suspense>
    );
  }
}
