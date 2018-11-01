'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  author: {
    type: String,
    required: 'There is no message author'
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: 'Message cannot be empty'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);