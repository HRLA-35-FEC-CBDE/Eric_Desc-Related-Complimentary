const express = require('express');
const router = express.Router();

router.routes('/get', (req, res) => {
  console.log('------- Routes.js -------')
  res.status(200).send('Yes').end();
});

module.exports = router;