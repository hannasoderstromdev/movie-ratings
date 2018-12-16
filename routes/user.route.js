const { Router } = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')

router.post('/create', userController.create)
router.post('/authenticate', userController.authenticate)

module.exports = router
