const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    Message = require('./api/models/messageModel'),
    User = require('./api/models/userModel')
    Reply = require('./api/models/replyModel') //created model loading here
bodyParser = require('body-parser'),
    cors = require('cors');
    require('./api/config/passport');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MesSend', {
    useNewUrlParser: true
});

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static('static'))

var routes = require('./api/routes/messageRoutes'); //importing route
routes(app); //register the route
var routes2 = require('./api/routes/userRoutes');
routes2(app);

app.listen(port);


console.log('MesSend RESTful API server started on: ' + port);