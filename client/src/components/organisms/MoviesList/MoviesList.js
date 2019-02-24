import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      actors: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      id: PropTypes.string,
      language: PropTypes.string.isRequired,
      listStyle: PropTypes.string,
      plot: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      production: PropTypes.string.isRequired,
      rating: PropTypes.number,
      ratings: PropTypes.arrayOf(
        PropTypes.shape({
          Source: PropTypes.string.isRequired,
          Value: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      released: PropTypes.string.isRequired,
      runtime: PropTypes.string.isRequired,
      showDelete: PropTypes.bool,
      title: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default MoviesList
