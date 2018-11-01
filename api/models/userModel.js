'use strict';
var mongoose = require('mongoose'),
Message = mongoose.model('Messages');;
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username required'
  },
  password: {
    type: String,
    required: 'Message cannot be empty'
  },
  messages: {
      type:[Message]
  }
});

module.exports = mongoose.model('Users', UserSchema);