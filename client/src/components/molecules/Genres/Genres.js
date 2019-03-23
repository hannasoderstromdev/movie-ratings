import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Genre from 'components/molecules/Genre'

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  span {
    margin-right: 0.5rem;
  }
`

const Genres = ({ genres }) => (
  <Wrapper>
    {genres &&
      Object.entries(genres).map(([id, genre]) => (
        <Genre id={id} key={id} name={genre.name} />
      ))}
  </Wrapper>
)

Genres.propTypes = {
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
}

export default Genres
