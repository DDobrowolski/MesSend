'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schemconst,
crypto = require('crypto'),
jwt = require('jsonwebtoken');

let UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required'
  },
  passwordHash: {
    type: String,
    required: 'Password is required'
  },
  passwordSalt: {
    type: String,
    required: 'Password is required'
  },
  messages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Messages',
  },
  image: {
    type: String 
  }
});

UserSchema.methods.setPassword = (password) => {
  this.passwordSalt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    username: this.username,
    id: this._id,
    token: this.generateJWT(),
  }, 'secret');
};

UserSchema.methods.toAuthJSON = () => ({
  _id: this._id,
  username: this.username,
  token: this.generateJWT(),
});

module.exports = mongoose.model('Users', UserSchema);