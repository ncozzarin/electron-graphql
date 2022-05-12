/* eslint-disable prettier/prettier */
const cors = require("cors");
const express = require('express');

  const port = 8081;
  const app = express();
app.use(cors());
app.get('/', (req, res) => res.json({ key: 'value' }));
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.listen(port, () => console.log(`Server start at ${port}`));


