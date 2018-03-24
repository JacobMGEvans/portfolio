import React, { Component } from 'react';
import { Button } from 'material-ui'; 

import Navigation from '../navigation'

class Landing extends Component{
  
  render(){
    return(
    <Button variant="raised" color="primary">
      Home Page! 
    </Button>
    )
  }
}

export default Landing