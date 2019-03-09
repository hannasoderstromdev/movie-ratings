import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MovieType } from 'types'

import MoviePreview from 'components/molecules/MoviePreview'

const MoviesListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ listStyle }) =>
    listStyle === 'rows' ? 'auto' : '1fr 1fr 1fr'};
  grid-gap: 2rem;
`

const MoviesList = ({ movies, listStyle }) => (
  <MoviesListWrapper listStyle={listStyle}>
    {movies.map((movie, i) => (
      <MoviePreview key={i} {...movie} listStyle={listStyle} />
    ))}
  </MoviesListWrapper>
)

MoviesList.defaultProps = {
  listStyle: 'rows',
}

MoviesList.propTypes = {
  listStyle: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape(MovieType)).isRequired,
}

export default MoviesList
