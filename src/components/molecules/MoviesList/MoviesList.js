import React from 'react'

import Movie from 'components/molecules/Movie'

const MoviesList = ({ movies }) => {
  return movies.map(movie => <Movie key={movie.id} {...movie} />)
}

export default MoviesList
