/* eslint-disable prettier/prettier */
const express = require('express');

  const port = 8081;
  const app = express();

app.get('/', (req, res) => res.json({ key: 'value' }));

app.listen(port, () => console.log(`Server start at ${port}`));
