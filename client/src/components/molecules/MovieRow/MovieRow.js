import React from 'react'
import styled from 'styled-components'

import MovieHeader from 'components/molecules/MovieHeader'

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 2fr 5fr;
  align-items: start;
  grid-gap: 2rem;
`

const PosterImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`

// interface MovieRowProps {
//   genres: {};
//   id?: string;
//   openFullMovie: () => void;
//   poster: string;
//   rating?: number;
//   runtime: string;
//   setRating?: () => void;
//   title: string;
//   year: string;
// }

const MovieRow = ({
  id,
  poster,
  title,
  year,
  runtime,
  genres,
  setRating,
  rating,
  openFullMovie,
}) => (
  <Wrapper>
    <PosterImg alt={title} onClick={openFullMovie} src={poster} />
    <MovieHeader
      genres={genres}
      id={id}
      openFullMovie={openFullMovie}
      poster={poster}
      rating={rating}
      runtime={runtime}
      setRating={setRating}
      title={title}
      year={year}
    />
  </Wrapper>
)

export default MovieRow
