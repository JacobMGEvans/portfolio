import React from 'react';
import ReactDom from 'react-dom';

//  context api instead of redux?

import App './src/components/app'

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <App />, container
)