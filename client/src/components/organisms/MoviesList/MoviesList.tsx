import React from "react";
import styled from "styled-components";

import { MovieType } from "types";

import MoviePreview from "components/molecules/MoviePreview";

const MoviesListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ listStyle }) =>
    listStyle === "rows" ? "auto" : "1fr 1fr 1fr"};
  grid-gap: 2rem;
`;

type MoviesListProps = {
  listStyle?: string,
  movies: any[]
};

const MoviesList: React.SFC<MoviesListProps> = ({ movies, listStyle }) => (
  <MoviesListWrapper listStyle={listStyle}>
    {movies.map((movie, i) => (
      <MoviePreview key={i} {...movie} listStyle={listStyle} />
    ))}
  </MoviesListWrapper>
);

MoviesList.defaultProps = {
  listStyle: "rows"
};

export default MoviesList;
