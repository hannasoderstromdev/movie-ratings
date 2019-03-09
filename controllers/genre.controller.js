const genreModel = require('../models/Genre')

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const genres = await genreModel.find({})

      res.json({
        status: 'success',
        message: 'Genres found',
        data: { genres },
      })
    } catch (error) {
      next(error)
    }
  },
}
