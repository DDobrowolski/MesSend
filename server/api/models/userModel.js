'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  messages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Messages',
  },
  image: {
    type: String 
  }
});

module.exports = mongoose.model('Users', UserSchema);