import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state({
      toggled: false,
    });
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
            >
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Gatsby
                </Link>
              </h1>
            </div>
          </div>

          <div>Summary and Bio will go here</div>

          <button onClick="show the text">Click Button</button>
          <section>Will have Text here</section>
        </div>
      </div>
    );
  }
}

export default dashboard;
