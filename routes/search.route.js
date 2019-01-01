const { Router } = require('express')
const router = new Router()

const searchController = require('../controllers/search.controller')
const movieController = require('../controllers/movie.controller')

router.get('/', searchController.search, movieController.findExisting)

module.exports = router
