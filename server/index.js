const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const server = express();
const router = express.Router();
const port = 3800;

const routes = require('./routes');

server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../client/public')));

server.use('/api/relatedInfo', routes);

server.listen(port, () => console.log(`Listening to port: ${port}.`));
