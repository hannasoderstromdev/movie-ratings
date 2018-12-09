import React from 'react'

import Movie from 'components/molecules/Movie'

const MoviesList = ({ movies }) =>
  movies.map(movie => <Movie key={movie.imdbID} {...movie} />)

export default MoviesList
