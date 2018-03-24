
import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Landing from '../landing'

class App extends PureComponent {
  render() {
    return (
      <div>
      <Landing />
      </div>
    );
  }
}

export default App;
