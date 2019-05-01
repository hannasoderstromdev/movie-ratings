import React from 'react'
import styled from 'styled-components'

import { H2, Text, TextSmall } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import TriangleZoom from 'components/molecules/TriangleZoom'
import Genres from 'components/molecules/Genres'
import Rating from 'components/molecules/Rating'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: start;
  position: relative;
`

const Title = styled(H2)`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`

const YearRuntime = styled(TextSmall)`
  display: block;
  margin-top: 0.5rem;

  span {
    margin-right: 1rem;
  }
`

const DeleteText = styled(Text)`
  color: ${({ theme }) => theme.colors.danger};
  margin-right: 0.5rem;
  text-decoration: underline;
`

const RatingWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

const TrianglePosition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const MovieHeader = ({
  id,
  deleteMovie,
  title,
  year,
  runtime,
  genres,
  openFullMovie,
  rating,
  setRating,
  showDelete,
}: {
  id: string,
  deleteMovie: (id: string) => void,
  title: string,
  year: string,
  runtime: string,
  genres: {}[],
  openFullMovie: () => void,
  rating: number,
  setRating: () => void,
  showDelete: () => void,
}) => {
  return (
    <Wrapper>
      {!showDelete && (
        <TrianglePosition>
          <TriangleZoom onClick={openFullMovie} />
        </TrianglePosition>
      )}
      <Title>{title}</Title>
      <YearRuntime>
        <span>{year}</span> {runtime}
      </YearRuntime>
      <Genres genres={genres} />

      {showDelete && id && (
        <Button onClick={() => deleteMovie(id)} thirdiary>
          <DeleteText>Delete</DeleteText>
          <Icon color="#832D2D" icon={['fas', 'trash-alt']} iconsize="12px" />
        </Button>
      )}

      {!!rating && (
        <RatingWrapper>
          <Rating rating={rating} setRating={setRating} small />
        </RatingWrapper>
      )}
    </Wrapper>
  )
}

export default MovieHeader
