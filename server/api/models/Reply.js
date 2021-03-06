'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReplySchema = new Schema({
  messageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Messages'
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: 'Message cannot be empty'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: 'Message must have author'
  }
});

module.exports = mongoose.model('Replies', ReplySchema);