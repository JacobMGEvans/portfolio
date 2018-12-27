import React, { Component, Fragment, lazy, Suspense } from 'react';

const RenderSocialIcons = lazy(() => import('../social-icons'));
const Skills = lazy(() => import('../skills'));

export default class About extends Component {
  state = {
    display: false
  };
  // Add Image preferably a few at least one professional headshot.
  //
  handleClick = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  render() {
    const { handleClick } = this;
    const { display } = this.state;

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
              <RenderSocialIcons />
            </section>
          </div>
        </div>
      </Suspense>
    );
  }
}
