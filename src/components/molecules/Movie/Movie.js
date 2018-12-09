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

const Movie = ({ Title, Year, Runtime, Director, Actors, Poster, rating }) => (
  <MovieStyle>
    <PosterImg src={Poster} alt={Title} />
    <Details>
      <div>
        <H2>{Title}</H2>
        <div>
          <Text>{Year}</Text> <Text>{Runtime}</Text>
        </div>
      </div>
      {rating ? <Rating rating={rating} /> : <div>No rating</div>}

      <Text>Director: {Director}</Text>
      <Text>Actors: {Actors}</Text>
    </Details>
  </MovieStyle>
)

Movie.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Released: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default Movie
