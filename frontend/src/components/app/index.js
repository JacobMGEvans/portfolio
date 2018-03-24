
import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from '../navigation';
import Contacts from '../contacts'
import About from '../about'

class App extends Component {
  render() {
    return (

      
      <Router>
    <Switch>
      <Navigation />
          {/* <Route exact path='/' component={component}/> */}
         <Route path='/contacts' component={Contacts}/>
         <Route path='/about' component={About}/>
    </Switch>
      </Router>
    
    );
  }
}

export default App;
