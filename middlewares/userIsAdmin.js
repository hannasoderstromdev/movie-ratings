module.exports = {
  userIsAdmin: (req, res, next) => {
    try {
      console.log('res', res.locals.user.role)
      if (res.locals.user.role !== 'Admin') {
        res.status(401).json({ status: 'error', message: 'Unauthorized', data: null })
      } else {
        next()
      }
    } catch (error) {
      next(error)
    }
  },
}
