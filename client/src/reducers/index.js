import { combineReducers } from 'redux'

import alerts from './alerts/alerts.reducer'
import user from './user/user.reducer'
import movies from './movies/movies.reducer'
import search from './search/search.reducer'

const rootReducer = combineReducers({
  alerts,
  user,
  movies,
  search,
})

export default rootReducer
