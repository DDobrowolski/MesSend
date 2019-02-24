'use strict';
const mongoose = require('mongoose'),
Schema = mongoose.Schema,
crypto = require('crypto'),
jwt = require('jsonwebtoken');

let UserSchema = new Schema({
  email: {
    type: String,
    required: 'Email is required'
  },
  passwordHash: {
    type: String,
  },
  passwordSalt: {
    type: String,
  },
  messages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Messages',
  },
  image: {
    type: String 
  }
});

UserSchema.methods.setPassword = function(password) {
  this.passwordSalt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    token: this.generateJWT(),
  }, 'secret');
};

UserSchema.methods.toAuthJSON = () => ({
  _id: this._id,
  email: this.email,
  token: this.generateJWT(),
});

module.exports = mongoose.model('Users', UserSchema);