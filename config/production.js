module.exports = {
  env: 'production',
  db: process.env.MONGODB_URI,
  port: process.env.PORT || 4000,
}
