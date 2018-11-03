'use strict';


var mongoose = require('mongoose'),
  Message = mongoose.model('Messages'),
  User = mongoose.model('Users');

exports.get_all_messages = function (req, res) {
  Message.find({}, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.create_message = function (req, res) {
  var new_message = new Message(req.body);
  var user = new User(User.findById(req.params.author))
  console.log(user);
  new_message.author = user;
  new_message.save(function (err, message) { 
    if (err)
      res.send(err);
    Message.find({})
    .populate('user')
    .exec((err, messages) => {
      res.json(messages)
    })
  });
};


exports.get_one_message = function (req, res) {
  Message.findById(req.params.messageId, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.update_message = function (req, res) {
  Message.findOneAndUpdate({
    _id: req.params.messageId
  }, req.body, {
    new: true
  }, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.delete_message = function (req, res) {
  Message.remove({
    _id: req.params.messageId
  }, function (err, message) {
    if (err)
      res.send(err);
    res.json({
      message: 'Message successfully deleted'
    });
  });
};