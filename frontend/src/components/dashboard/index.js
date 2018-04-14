import React, { Component } from 'react';

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
        <nav>This will be the Nav bar</nav>

        <div>Summary and Bio will go here</div>
        <div>
          <button onClick="show the text">Click Button</button>
          <section>Will have Text here</section>
        </div>
      </div>
    );
  }
}

export default dashboard;
