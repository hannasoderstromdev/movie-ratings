const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 10

const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User',
  },
})

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds)
  next()
})

// const passportLocalMongoose = require('passport-local-mongoose')

// const Schema = mongoose.Schema

// const UserSchema = new Schema(
//   {
//     email: { type: String, lowercase: true, unique: true, required: true },
//     password: { type: String, required: true },
//     profile: {
//       firstName: { type: String },
//       lastName: { type: String },
//     },
//     role: {
//       type: String,
//       enum: ['Member', 'Admin'],
//       default: 'Member',
//     },
//     resetPasswordToken: { type: String },
//     resetPasswordExpires: { type: Date },
//   },
//   {
//     timestamps: true,
//   },
// )

// UserSchema.pre('save', function(next) {
//   const user = this
//   const SALT_FACTOR = 5

//   if (!user.isModified('password')) return next()

//   bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
//     if (err) return next(err)

//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) return next(err)
//       user.password = hash
//       next()
//     })
//   })
// })

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) {
//       return cb(err)
//     }

//     cb(null, isMatch)
//   })
// }

// UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema)

module.exports = User
