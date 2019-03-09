const { Router } = require('express')
const router = new Router()

const movieController = require('../controllers/movie.controller')
const userController = require('../controllers/user.controller')

const { userIsAdmin } = require('../middlewares/userIsAdmin')

router.get('/', movieController.getAll)

router.get('/title/:title', movieController.validate('findByTitle'), movieController.findByTitle)

router.get('/genre/:genre', movieController.validate('getByGenre'), movieController.getByGenre)

router.get('/latest/:amount', movieController.getLatest)

router.get('/rating/:rating', movieController.getByRating)

router.get('/random/:amount', movieController.getRandom)

router.post('/create', userIsAdmin, movieController.validate('create'), movieController.create)

router.get('/:movieId(d+)', movieController.validate('getById'), movieController.getById)

router.put(
  '/:movieId',
  userIsAdmin,
  movieController.validate('updateById'),
  movieController.updateById,
)

router.delete(
  '/:movieId',
  userIsAdmin,
  movieController.validate('deleteById'),
  movieController.deleteById,
)

module.exports = router
