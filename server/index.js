const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = 3800;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/public')));

server.post('/api/related', (req, res) => {
  console.log('------- Post -------');
  console.log(req.body);
  console.log('------- Post -------');

  res.status(200).send('Sick').end();
});

server.listen(port, () => console.log(`Listening to port: ${port}.`));
