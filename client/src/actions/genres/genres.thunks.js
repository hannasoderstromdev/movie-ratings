import genresActions from './genres.actions'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

import genresService from 'services/genres/genres.service'

const getAll = () => async dispatch => {
  dispatch(genresActions.loadGenresInit())
  try {
    const { data } = await genresService.getAll()
    dispatch(genresActions.loadGenresSuccess(data))
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(genresActions.loadGenresFailure())
  }
}

const genresThunks = {
  getAll,
}

export default genresThunks
