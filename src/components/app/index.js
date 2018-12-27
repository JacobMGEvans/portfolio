import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '../about';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* HOME PAGE NEEDED */}
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </BrowserRouter>
    );
  }
}
