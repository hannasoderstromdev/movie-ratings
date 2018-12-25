modules.export = {
  env: 'production',
  mongoURI: process.env.MONGO_URI,
  JWTSecret: process.env.JWT_SECRET,
  OMDB_API_KEY: process.env.OMDB_API_KEY,
  port: process.env.PORT,
}
