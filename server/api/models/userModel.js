'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username required'
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