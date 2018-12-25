const proxy = require('http-proxy-middleware')
const keys = require('../../config/keys')

module.exports = function(app) {
  app.use(proxy('/users/authenticate', { target: keys.ROOT_URL }))
  app.use(proxy('/search', { target: keys.ROOT_URL }))
  app.use(proxy('/movies', { target: keys.ROOT_URL }))
  app.use(proxy('/movies/create', { target: keys.ROOT_URL }))
}
