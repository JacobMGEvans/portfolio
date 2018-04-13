import React, { Component } from 'react';

class dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state({
      toggled: false,
    });
  }

  render() {
    return (
      <div>
        <nav>This will be the Nav bar</nav>

        <div>Summary and Bio will go here</div>
      </div>
    );
  }
}

export default dashboard;
