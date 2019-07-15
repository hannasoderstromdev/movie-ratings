import { createSelector } from 'reselect'

const getMovies = state => state.movies.movies
const getSelectedMovieId = state => state.movies.selectedMovieId

const getSelectedMovie = createSelector(
  [getMovies, getSelectedMovieId],
  (movies, selectedMovieId) =>
    movies.find(movie => movie.id === selectedMovieId),
)

export default { getMovies, getSelectedMovieId, getSelectedMovie }
