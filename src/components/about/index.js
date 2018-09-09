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

        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Twitter">
            Twitter
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank">
            CC 3.0 BY
          </a>
        </div>

        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Linkedin">
            Linkedin
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank">
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}
