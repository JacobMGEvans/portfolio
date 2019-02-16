const express = require(`express`);
require(`dotenv`).config();

express()
  .use(express.static(`${__dirname}/dist`))
  .get(`*`, (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
  .listen(process.env.PORT || 1234, () => console.log(`__SERVER_RUNNING__`, process.env.PORT),
  );
