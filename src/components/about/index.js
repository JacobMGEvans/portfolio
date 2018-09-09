import React, { PureComponent } from 'react';

import { BrowserRouter as Link } from 'react-router-dom';

export default class About extends PureComponent {
  // Add Image preferably a few at least one professional headshot.
  //
  render() {
    return (
      // need a headshot or just use the same one I have been using.
      <div>
        <img src="" alt="" />
        <div>
          Something about Me. The Skills, Projects, ect. will
          <div>Summary and Bio will go here</div>
          using some anchor to the text or images.
        </div>
      </div>
    );
  }
}
