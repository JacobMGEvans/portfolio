const express = require('express');

express()
  .use(express.static(`${__dirname}/dist`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
  .listen(process.env.PORT, () => console.log('__SERVER_RUNNING__', process.env.PORT),
  );