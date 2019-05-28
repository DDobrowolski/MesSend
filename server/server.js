const express = require('express'),
    port = process.env.PORT || 8080,
    Message = require('./api/models/Message'),
    User = require('./api/models/User'),
    Reply = require('./api/models/Reply'), //created model loading here
    passport = require('./api/config/passport'),
    loaders = require('./loaders');

// mongoose instance connection url connection


async function startServer() {
    const app = express();

    await loaders(app);

    app.listen(port, err => {
        if (err) {
            console.log(err);
            return;
        }
    });

    console.log('MesSend RESTful API server started on: ' + port);
}

startServer();

