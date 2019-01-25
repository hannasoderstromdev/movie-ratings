import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Rating from 'components/molecules/Rating'

const Wrapper = styled.div`
  width: 100%;
  height: 40vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: ${({ imgUrl }) => imgUrl && `url(${imgUrl})`};
  background-size: cover;
`

const RatingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`

const MovieTile = ({ poster, rating, openFullMovie }) => (
  <Wrapper imgUrl={poster} onClick={openFullMovie}>
    <RatingWrapper>
      <Rating rating={rating} small useLock={false} />
    </RatingWrapper>
  </Wrapper>
)

MovieTile.propTypes = {
  openFullMovie: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default MovieTile
