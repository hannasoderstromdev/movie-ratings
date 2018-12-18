import { combineReducers } from 'redux'

import alerts from './alerts/alerts.reducer'
import authentication from './authentication/authentication.reducer'
import movies from './movies/movies.reducer'

const rootReducer = combineReducers({
  alerts,
  authentication,
  movies,
})

export default rootReducer
