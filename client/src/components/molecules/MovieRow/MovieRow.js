import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'components/atoms/Button'
import MovieHeader from 'components/molecules/MovieHeader'

import expandImg from './expand.png'

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1.8fr 5fr 1fr;
  align-items: start;
  grid-gap: 2rem;
`

const PosterImg = styled.img`
  width: 100%;
  height: auto;
`

const RightAligned = styled.div`
  justify-self: end;
`

const MovieRow = ({
  id,
  poster,
  title,
  year,
  runtime,
  genre,
  setRating,
  rating,
  openFullMovie,
}) => (
  <Wrapper>
    <PosterImg alt={title} onClick={openFullMovie} src={poster} />
    <MovieHeader
      genre={genre}
      id={id}
      poster={poster}
      rating={rating}
      runtime={runtime}
      setRating={setRating}
      title={title}
      year={year}
    />
    <RightAligned>
      <Button onClick={openFullMovie} thirdiary>
        <img alt={title} src={expandImg} />
      </Button>
    </RightAligned>
  </Wrapper>
)

MovieRow.defaultProps = {
  rating: null,
  setRating: null,
}

MovieRow.propTypes = {
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  openFullMovie: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.string.isRequired,
  setRating: PropTypes.func,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

export default MovieRow
