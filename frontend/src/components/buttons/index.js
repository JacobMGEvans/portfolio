import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Button } from 'material-ui'; 


class Buttons extends PureComponent{
  
  render(){
    return(
      
      <div>
      <Button variant="raised" color="primary">
    <Link to='/'> Home </Link> 
    </Button>
    <Button variant="raised" color="primary">
    <Link to='/about'> About </Link> 
    </Button>
    <Button variant="raised" color="primary">
    <Link to='/contacts'> Contacts </Link> 
    </Button>
      </div> 
    
   
   
    )
  }
}

export default Buttons