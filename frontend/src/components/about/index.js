import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends PureComponent {
  // Add Image preferably a few at least one professional headshot.
  //
  render() {
    return (
      // need a headshot or just use the same one I have been using.
      <div>
        <img src="" alt="" />
        <div>
          Something about Me. The Skills, Projects, ect. will
          <Link /> using some anchor to the text or images.
        </div>
      </div>
    );
  }
}

export default About;
