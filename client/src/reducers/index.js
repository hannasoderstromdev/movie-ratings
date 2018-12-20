import { combineReducers } from 'redux'

import alerts from './alerts/alerts.reducer'
import user from './user/user.reducer'
import movies from './movies/movies.reducer'

const rootReducer = combineReducers({
  alerts,
  user,
  movies,
})

export default rootReducer
