const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const keys = require('../config/keys')
const userModel = require('../models/User')

module.exports = {
  /**
   * Create User
   */
  create: function(req, res, next) {
    userModel.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      },
      function(err, result) {
        if (err) {
          next(err)
        } else {
          res.json({
            status: 'success',
            message: 'User created successfully!',
            data: null,
          })
        }
      },
    )
  },

  /**
   * Authenticate User
   */
  authenticate: function(req, res, next) {
    userModel.findOne(
      {
        email: req.body.email,
      },
      function(err, userInfo) {
        if (err) {
          next(err)
        } else {
          try {
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
              const token = jwt.sign({ id: userInfo._id }, keys.JWTSecret, {
                expiresIn: '1h',
              })

              res.json({
                status: 'success',
                message: 'User found',
                data: {
                  user: {
                    role: userInfo.role,
                    id: userInfo._id,
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    email: userInfo.email,
                  },
                  token,
                },
              })
            }
          } catch (error) {
            next(error)
          }
        }
      },
    )
  },
}
