const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/users/authenticate', { target: 'http://localhost:5000' }))
  app.use(proxy('/search', { target: 'http://localhost:5000' }))
  app.use(proxy('/movies', { target: 'http://localhost:5000' }))
}
