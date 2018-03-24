
import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Landing from '../landing'
import Navigation from '../navigation';
import Contacts from '../contacts'
import About from '../about'

class App extends Component {
  render() {
    return (

      <div>
      <Navigation />
      <Router>
        <Switch>
         <Route exact path='/' component={Landing}/>
         <Route path='/contacts' component={Contacts}/>
         <Route path='/about' component={About}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
