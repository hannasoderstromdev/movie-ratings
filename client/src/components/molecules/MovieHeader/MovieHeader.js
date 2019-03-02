import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, Text } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import Genres from 'components/molecules/Genres'
import Rating from 'components/molecules/Rating'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: start;
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
`

const YearRuntime = styled(Text)``

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
  genres,
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
        <Genres genres={genres} />
      </Meta>
      {!!rating && <Rating rating={rating} setRating={setRating} small />}
      {showDelete && id && (
        <Button onClick={() => deleteMovie(id)} thirdiary>
          <DeleteText>Delete</DeleteText>
          <Icon color="#832D2D" icon={['fas', 'trash-alt']} iconsize="12px" />
        </Button>
      )}
    </Wrapper>
  )
}

MovieHeader.defaultProps = {
  deleteMovie: null,
  id: null,
  rating: null,
  setRating: null,
  showDelete: false,
}

MovieHeader.propTypes = {
  deleteMovie: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.string.isRequired,
  setRating: PropTypes.func,
  showDelete: PropTypes.bool,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

export default MovieHeader
