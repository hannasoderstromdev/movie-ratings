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

const MoviePreview = ({
  poster,
  title,
  year,
  runtime,
  genre,
  setRating,
  rating,
  toggleFullMovie,
}) => (
  <Wrapper>
    <PosterImg src={poster} alt={title} onClick={toggleFullMovie} />
    <MovieHeader
      title={title}
      year={year}
      runtime={runtime}
      genre={genre}
      rating={rating}
      poster={poster}
      setRating={setRating}
    />
    <RightAligned>
      <Button onClick={toggleFullMovie} thirdiary>
        <img src={expandImg} alt={title} />
      </Button>
    </RightAligned>
  </Wrapper>
)

MoviePreview.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number,
  toggleFullMovie: PropTypes.func.isRequired,
  setRating: PropTypes.func,
}

export default MoviePreview
