import React, { Component, PureComponent } from 'react';

import Buttons from '../buttons'
//Use the spiraling out floating buttons from main button. 
//
class Navigation extends Component{
   render(){
   return(
    <nav>
    <Buttons />
   <div>Navigation Component will be NavBar</div>
   </nav>
   )
  }
}
export default Navigation