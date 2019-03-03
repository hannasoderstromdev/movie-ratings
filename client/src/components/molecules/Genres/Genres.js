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
      genres.map((genre, i) => <Text key={i}>{genre}</Text>)}
  </Wrapper>
)

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Genres
