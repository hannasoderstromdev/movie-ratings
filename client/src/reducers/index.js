import { combineReducers } from 'redux'

import user from './user/user.reducer'
import movies from './movies/movies.reducer'
import search from './search/search.reducer'
import errorHandler from './errorHandler/errorHandler.reducer'
import modals from './modals/modals.reducer'

const rootReducer = combineReducers({
  user,
  movies,
  search,
  errorHandler,
  modals,
})

export default rootReducer
