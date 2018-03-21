import React, { PureComponent } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class About extends PureComponent {
  constructor(props) {
    super(props);
    // May use constructor, not sure yet.
    // something to do with getting twitter streaming in the page.
    // something to do with getting GitHub on the page
  }

  // Add Image preferably a few at least one professional headshot.
  //
  render() {
    return (
      <div>Something about Me</div>
    );
  }
}

export default About;
