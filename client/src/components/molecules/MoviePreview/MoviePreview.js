import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/atoms/Icon'
import MovieHeader from 'components/molecules/MovieHeader'

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  grid-gap: 2rem;
`

const PosterImg = styled.img`
  max-width: 18vw;
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
  rating,
  toggleFullMovie,
}) => (
  <Wrapper>
    <PosterImg src={poster} alt={title} onClick={() => toggleFullMovie()} />
    <MovieHeader
      title={title}
      year={year}
      runtime={runtime}
      genre={genre}
      rating={rating}
      poster={poster}
    />
    <RightAligned>
      <Icon
        icon={['fas', 'ellipsis-h']}
        iconsize="24px"
        color="#666"
        onClick={toggleFullMovie}
      />
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
}

export default MoviePreview
