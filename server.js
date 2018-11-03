var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Message = require('./api/models/messageModel'),
    User = require('./api/models/userModel') //created model loading here
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
var routes2 = require('./api/routes/userRoutes');
routes2(app);

app.listen(port);


console.log('MesSend RESTful API server started on: ' + port);