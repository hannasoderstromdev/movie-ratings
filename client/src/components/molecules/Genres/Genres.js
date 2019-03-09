import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/atoms/Icon'

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;

  span {
    margin-right: 0.5rem;
  }
`

const Genre = styled.button`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.dark};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.textDark : theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.textSmall};
  outline: none;
  margin: 0 1rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 0.5rem;
  }
`

const Genres = ({ genres, onClick }) => {
  return onClick ? (
    <Wrapper>
      {genres &&
        !!genres.length &&
        genres.map(genre => (
          <Genre
            key={genre._id}
            onClick={() => onClick(genre._id)}
            selected={genre.selected}
          >
            {genre.name}
            {genre.selected ? (
              <Icon icon={['fas', 'minus']} />
            ) : (
              <Icon icon={['fas', 'plus']} />
            )}
          </Genre>
        ))}
    </Wrapper>
  ) : (
    <Wrapper>
      {genres &&
        !!genres.length &&
        genres.map(genre => <Genre key={genre._id}>{genre.name}</Genre>)}
    </Wrapper>
  )
}

Genres.defaultProps = {
  onClick: undefined,
}

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func,
}

export default Genres
