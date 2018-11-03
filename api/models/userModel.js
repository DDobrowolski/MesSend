'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username required'
  }
});

module.exports = mongoose.model('Users', UserSchema);