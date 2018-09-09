import React, { PureComponent, Fragment } from 'react';

import Skills from '../skills';

export default class About extends PureComponent {
  // Add Image preferably a few at least one professional headshot.
  //
  render() {
    return (
      // need a headshot or just use the same one I have been using.
      <div>
        <img src="" alt="" />
        <div>
          <Fragment>
            <Skills />
          </Fragment>
          Something about Me. The Skills, Projects, ect. will
          <div>Summary and Bio will go here</div>
          using some anchor to the text or images.
        </div>
      </div>
    );
  }
}
