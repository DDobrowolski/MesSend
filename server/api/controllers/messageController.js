'use strict';


const mongoose = require('mongoose'),
  Message = mongoose.model('Messages'),
  Reply = mongoose.model('Replies');

exports.get_all_messages = (req, res) => {
  Message.find({}).populate(['author', 'replies'])
    .exec(function (err, message) {
      if (err)
        res.send(err);
      res.json(message);
    });
};

exports.add_reply = (req, res) => {
  console.log('Adding reply');
  const new_reply = new Reply({
    messageId: req.params.messageId,
    ...req.body
  });
  new_reply.save((err, reply) => {
    if (err) res.send(err);
    Message.findById(req.params.messageId, (err, message) => {
      message.replies.push(new_reply);
      Message.findOneAndUpdate({
        _id: req.params.messageId
      }, message, {
        new: true
      }, (err, messageRes) => {
        if(err) console.error(err);
        res.json(messageRes);
      });
    });
  });
};

exports.create_message = (req, res) => {
  const new_message = new Message(req.body);
  new_message.save((err, message) => {
    if (err) res.send(err);
    res.json(message);
  })
};


exports.get_one_message = (req, res) => {
  Message.findById(req.params.messageId, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  }).populate(['author', 'replies']).exec();
};


exports.update_message = (req, res) => {
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


exports.delete_message = (req, res) => {
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


exports.get_author_messages = (req, res) => {
  Message.find({
    author: {
      _id: req.params.authorId
    }
  }, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  }).populate('author').exec();
};