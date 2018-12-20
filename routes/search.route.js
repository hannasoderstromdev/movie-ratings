const { Router } = require('express')
const router = new Router()

const movieController = require('../controllers/search.controller')

router.get('/', movieController.search)

module.exports = router
