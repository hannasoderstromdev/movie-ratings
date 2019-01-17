import React from 'react'
import styled from 'styled-components'

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

// const Title = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   color: ${({ theme }) => theme.colors.primary};
//   text-align: center;
// `

const RatingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`

const MovieTile = ({ poster, title, rating }) => (
  <Wrapper imgUrl={poster}>
    <RatingWrapper>
      <Rating small rating={rating} useLock={false} />
    </RatingWrapper>
  </Wrapper>
)

export default MovieTile
