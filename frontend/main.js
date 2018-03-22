import React from 'react';
import ReactDom from 'react-dom';

import App from './src/components/app';

//  context api instead of redux?


const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <App />, container,
);
