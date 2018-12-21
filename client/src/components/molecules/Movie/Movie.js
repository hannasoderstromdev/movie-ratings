import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, Text } from 'components/atoms/Typography'
import Rating from 'components/molecules/Rating'

const MovieStyle = styled.article`
  display: grid;
  grid-template-columns: 2.5fr 5fr;
  grid-gap: 1.5rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PosterImg = styled.img`
  max-width: 40vw;
  height: auto;
`

const Movie = ({ title, year, runtime, director, actors, poster, rating }) => (
  <MovieStyle>
    <PosterImg src={poster} alt={title} />
    <Details>
      <div>
        <H2>{title}</H2>
        <div>
          <Text>{year}</Text> <Text>{runtime}</Text>
        </div>
      </div>
      {rating ? <Rating rating={rating} /> : <div>No rating</div>}

      <Text>Director: {director}</Text>
      <Text>Actors: {actors}</Text>
    </Details>
  </MovieStyle>
)

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default Movie
