import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from 'components/atoms/Typography'

const Wrapper = styled.div`
  margin-top: 0.5rem;

  span {
    margin-right: 0.5rem;
  }
`

const Genres = ({ genres }) => (
  <Wrapper>
    {genres &&
      !!genres.length &&
      genres.map(genre => <Text key={genre._id}>{genre.name}</Text>)}
  </Wrapper>
)

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
}

export default Genres
