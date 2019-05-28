const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = async app => {
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
  app.use(express.static('./static'));

  app.use(require('../api/routes'));
};
