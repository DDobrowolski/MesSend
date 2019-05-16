'use strict';

const mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  passport = require('passport');

exports.get_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_user = function (req, res) {
  const new_user = new User(req.body);
  new_user.setPassword(req.body.password);

  new_user.save(function (err, user) {
    if (err) res.send(err);
    console.log(`Created user ${user}`);
    res.json(user);
  });
};

exports.get_one_user = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_user = function (req, res) {
  User.findOneAndUpdate({
      _id: req.params.userId
    },
    req.body, {
      new: true
    },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.delete_user = function (req, res) {
  User.remove({
      _id: req.params.userId
    },
    function (err, user) {
      if (err) res.send(err);
      console.log(`Deleted user ${user}`);
      res.json({
        user: 'User successfully deleted'
      });
    }
  );
};

exports.get_user_messages = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
      if (err) res.send(err);
      res.json(user);
    })
    .populate('messages')
    .exec();
};

exports.sign_in = (req, res, next) => {
  const {
    body: {
      user
    }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  return passport.authenticate(
    'local', {
      session: false
    },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res.json({
          user: user.toAuthJSON()
        });
      }

      return status(400).info;
    }
  )(req, res, next);
};

exports.get_current = (req, res, next) => {
  const {
    payload: {
      id
    }
  } = req;

  return User.findById(id, (err, user) => {
    if (err) return res.send(err);
    return res.json({
      user: user.toAuthJSON()
    });
  });
}