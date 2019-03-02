const jwt = require('jsonwebtoken')

const keys = require('../config/keys')
const userModel = require('../models/User')

module.exports = {
  /**
   * Utilities
   */
  validateUser: async (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], keys.JWT_SECRET, async function(err, decoded) {
      if (err) {
        res.status(403).json({ status: 'error', message: err.message, data: null })
      } else {
        try {
          const response = await userModel.findOne({ _id: decoded.id }).exec()
          res.locals.user = response
        } catch (error) {
          next(error)
        }
        next()
      }
    })
  },
}
