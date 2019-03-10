import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Genre from 'components/molecules/Genre'

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;

  span {
    margin-right: 0.5rem;
  }
`

const Genres = ({ genres }) => (
  <Wrapper>
    {genres &&
      !!genres.length &&
      genres.map(genre => (
        <Genre id={genre._id} key={genre._id} name={genre.name} />
      ))}
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
