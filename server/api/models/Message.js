'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: 'Message cannot be empty'
  },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Replies'
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: 'Message must have author'
  }
});

module.exports = mongoose.model('Messages', MessageSchema);