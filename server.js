var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Message = require('./api/models/messageModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MesSend');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/routes/messageRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('MesSend RESTful API server started on: ' + port);