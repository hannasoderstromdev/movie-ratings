import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MoviePreview from 'components/molecules/MoviePreview'

const MoviesListWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const MoviesList = ({ movies }) => {
  return movies.length ? (
    <MoviesListWrapper>
      {movies.map(movie => (
        <MoviePreview key={movie.id} {...movie} />
      ))}
    </MoviesListWrapper>
  ) : null
}

export default MoviesList
