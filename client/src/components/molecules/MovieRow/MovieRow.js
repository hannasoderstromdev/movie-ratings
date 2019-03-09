import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MovieHeader from 'components/molecules/MovieHeader'

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 2fr 5fr;
  align-items: start;
  grid-gap: 2rem;
`

const PosterImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`

const MovieRow = ({
  id,
  poster,
  title,
  year,
  runtime,
  genres,
  setRating,
  rating,
  openFullMovie,
}) => (
  <Wrapper>
    <PosterImg alt={title} onClick={openFullMovie} src={poster} />
    <MovieHeader
      genres={genres}
      id={id}
      poster={poster}
      rating={rating}
      runtime={runtime}
      setRating={setRating}
      title={title}
      year={year}
    />
  </Wrapper>
)

MovieRow.defaultProps = {
  id: null,
  rating: null,
  setRating: null,
}

MovieRow.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  id: PropTypes.string,
  openFullMovie: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.string.isRequired,
  setRating: PropTypes.func,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

export default MovieRow
