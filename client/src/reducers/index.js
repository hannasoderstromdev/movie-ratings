import { combineReducers } from 'redux'

import user from './user/user.reducer'
import movies from './movies/movies.reducer'
import search from './search/search.reducer'
import errorHandler from './errorHandler/errorHandler.reducer'
import modals from './modals/modals.reducer'
import genres from './genres/genres.reducer'

const rootReducer = combineReducers({
  errorHandler,
  genres,
  modals,
  movies,
  search,
  user,
})

export default rootReducer
