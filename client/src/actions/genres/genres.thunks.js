import genresActions from './genres.actions'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'
import moviesThunks from 'actions/movies/movies.thunks'

import genresService from 'services/genres/genres.service'

const getAll = () => async dispatch => {
  dispatch(genresActions.loadGenresInit())
  try {
    const { data } = await genresService.getAll()
    const genres = {}
    for (const genre of data.genres) {
      genres[genre._id] = { name: genre.name }
    }
    dispatch(genresActions.loadGenresSuccess(genres))
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

const addOrRemoveGenreAndGetMovies = ({ id, name }) => async (
  dispatch,
  getState,
) => {
  try {
    const { movies, genres } = getState()
    let nextGenres = Object.keys(genres.filter)

    if (genres.filter[id]) {
      await dispatch(genresActions.removeGenreFromFilter(id))
      nextGenres = nextGenres.filter(genre => genre !== id)
    } else {
      await dispatch(genresActions.addToGenreFilter({ id, name }))
      nextGenres.push(id)
    }

    await dispatch(
      moviesThunks.getMovies({
        limit: 10,
        page: 1,
        rating: movies.rating,
        genres: nextGenres,
      }),
    )
  } catch (error) {
    //
  }
}

const genresThunks = {
  getAll,
  addOrRemoveGenreAndGetMovies,
}

export default genresThunks
