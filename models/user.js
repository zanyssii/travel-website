const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  activity: { type: String, required: true },
  
  // travel_goal: { 
  //   type: Number 
  // },
  // exercise_progress: [
  //   {
  //     metric: { type: Number },
  //     date: { type: Date },
  //     date_string: String
  //   }
  // ],
  // money_goal: Number,
  // money_progress: [
  //   {
  //     trip: { type: Number },
  //     flight: { type: Number },
  //     hotel: { type: Number },
  //     food: { type: Number },
  //     entertaiment: [{ type: Number }],
  //     gifts: [{ type: Number }],
  //     date: { type: Date },
  //     date_string: String
  //   }
  // ],
  // things_goal: { type: Number, default: 8 },
  // things_progress: [
  //   {
  //     metric: { type: Number },
  //     date: { type: Date },
  //     date_string: String
  //   }
  // ]
});

// Execute before each user.save() call
UserSchema.pre('save', function (callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;