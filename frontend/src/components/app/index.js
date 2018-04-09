
import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Dashboard '../dashboard'
import About from '../about'

class App extends Component {
  render() {
    return (

      
      <Router>
    <Switch>
          <Route path='/' component={dashboard}/>
         <Route path='/about' component={About}/>
    </Switch>
      </Router>
    
    );
  }
}

export default App;
