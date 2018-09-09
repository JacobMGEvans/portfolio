import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Skills from '../skills';
import About from '../about';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Skills} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}
