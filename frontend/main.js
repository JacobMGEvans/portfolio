import React from 'react';
import ReactDom from 'react-dom';

import App './src/components/app';

//  context api instead of redux?


const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <App />, container
)