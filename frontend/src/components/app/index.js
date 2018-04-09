
import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Dashboard from '../dashboard'
import About from '../about'

if(true){
    console.log('App component')
}

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
