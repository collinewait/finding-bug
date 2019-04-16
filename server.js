const express = require('express');

const data = require('./data');
const { sampleMiddleware } = require('./middleware');


const app = express();
// When the code below is commented out, it creates an infinite loop in the middleware
// app.use(sampleMiddleware);

const returnData = (req, res) => {
  res.json({ data });
};

app.get('/', sampleMiddleware, (req, res) => returnData(req, res));


const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Example app listening at http://%s:%s', host, port);
});
