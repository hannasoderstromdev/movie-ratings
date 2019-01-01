import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, Text } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import Rating from 'components/molecules/Rating'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
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

const DeleteText = styled(Text)`
  color: ${({ theme }) => theme.colors.danger};
  margin-right: 0.5rem;
  text-decoration: underline;
`

const MovieHeader = ({
  id,
  deleteMovie,
  title,
  year,
  runtime,
  genre,
  rating,
  setRating,
  showDelete,
}) => {
  return (
    <Wrapper>
      <H2>{title}</H2>
      <Meta>
        <YearRuntime>
          {year}, {runtime}
        </YearRuntime>
        <Genre>{genre}</Genre>
      </Meta>
      {!!rating && <Rating small rating={rating} setRating={setRating} />}
      {showDelete && (
        <Button thirdiary onClick={() => deleteMovie(id)}>
          <DeleteText>Delete</DeleteText>
          <Icon icon={['fas', 'trash-alt']} color="#832D2D" iconsize="12px" />
        </Button>
      )}
    </Wrapper>
  )
}

MovieHeader.defaultProps = {
  rating: 0,
  setRating: null,
  deleteMovie: null,
  showDelete: false,
}

MovieHeader.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number,
  setRating: PropTypes.func,
  showDelete: PropTypes.bool,
  deleteMovie: PropTypes.func,
}

export default MovieHeader
