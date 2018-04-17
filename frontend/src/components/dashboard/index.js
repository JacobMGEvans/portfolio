import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import { RaisedButton } from 'material-ui';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggled: false,
      text: '',
    };
  }

  render() {
    const skills = ['javascript', 'react', 'node', 'jquery', 'express', ''];
    return (
      <div>
        <div>
          <div
            style={{
              background: 'rebeccapurple',
              marginBottom: '1.45rem',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
              }}
            />
          </div>

          <div>Summary and Bio will go here</div>
          <section>Will have Text here</section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
