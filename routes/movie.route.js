const { Router } = require('express')
const router = new Router()

const movieController = require('../controllers/movie.controller')

router.get('/', movieController.getAll)

router.get('/title/:title', movieController.validate('findByTitle'), movieController.findByTitle)

router.get('/latest/:amount', movieController.getLatest)

router.post('/create', movieController.validate('create'), movieController.create)

router.get('/:movieId(d+)', movieController.validate('getById'), movieController.getById)

router.put('/:movieId', movieController.validate('updateById'), movieController.updateById)

router.delete('/:movieId', movieController.validate('deleteById'), movieController.deleteById)

module.exports = router
