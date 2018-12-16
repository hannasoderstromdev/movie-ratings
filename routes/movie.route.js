const { Router } = require('express')
const router = new Router()

const movieController = require('../controllers/movie.controller')

router.get('/', movieController.getAll)
router.post('/', movieController.create)
router.get('/:movieId', movieController.getById)
router.put('/:movieId', movieController.updateById)
router.delete('/:movieId', movieController.deleteById)

module.exports = router
