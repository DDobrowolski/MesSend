'use strict';


const mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.get_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_user = function (req, res) {
  const new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.get_one_user = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_user = function (req, res) {
  User.findOneAndUpdate({
    _id: req.params.userId
  }, req.body, {
    new: true
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_user = function (req, res) {
  User.remove({
    _id: req.params.userId
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      user: 'User successfully deleted'
    });
  });
};

exports.get_user_messages = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  }).populate('messages').exec();;
};
