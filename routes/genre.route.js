const { Router } = require('express')
const router = new Router()

const genreController = require('../controllers/genre.controller')

router.get('/', genreController.getAll)

module.exports = router
