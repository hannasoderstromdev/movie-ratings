import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, Text } from 'components/atoms/Typography'

import Rating from 'components/molecules/Rating'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const YearRuntime = styled(Text)``

const Genre = styled(Text)`
  margin-top: 0.5rem;
`

const MovieHeader = ({ title, year, runtime, genre, rating }) => (
  <Wrapper>
    <H2>{title}</H2>
    <Meta>
      <YearRuntime>
        {year}, {runtime}
      </YearRuntime>
      <Genre>{genre}</Genre>
    </Meta>
    {!!rating ? <Rating small rating={rating} /> : <div>No rating</div>}
  </Wrapper>
)

MovieHeader.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default MovieHeader
