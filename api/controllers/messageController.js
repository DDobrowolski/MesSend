'use strict';


var mongoose = require('mongoose'),
  Message = mongoose.model('Messages'),
  User = mongoose.model('Users');

exports.get_all_messages = function (req, res) {
  Message.find({}).populate('author')
  .exec(function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.create_message = function (req, res) {
  var new_message = new Message(req.body);
  new_message.save((err, message)=> {
    if(err) res.send(err);
    res.json(message);
  })
  };


exports.get_one_message = function (req, res) {
  Message.findById(req.params.messageId, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  }).populate('author').exec();
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