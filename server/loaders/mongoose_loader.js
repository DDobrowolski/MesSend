const mongoose = require('mongoose');

module.exports = async () => {
  mongoose.Promise = global.Promise;
  const connection = mongoose.connect('mongodb://localhost/MesSend', {
    useNewUrlParser: true
  });

  return connection;
};
