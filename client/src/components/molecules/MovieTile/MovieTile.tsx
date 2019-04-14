import React from "react";
import styled from "styled-components";

import Rating from "components/molecules/Rating";

const Wrapper = styled.div`
  width: 100%;
  height: 40vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: ${({ imgUrl }) => imgUrl && `url(${imgUrl})`};
  background-size: cover;
`;

const RatingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

type MovieTileProps = {
  openFullMovie: (...args: any[]) => any,
  poster: string,
  rating: number
};

const MovieTile: React.SFC<MovieTileProps> = ({
  poster,
  rating,
  openFullMovie
}) => (
  <Wrapper data-testid="movie-tile" imgUrl={poster} onClick={openFullMovie}>
    <RatingWrapper>
      <Rating rating={rating} small useLock={false} />
    </RatingWrapper>
  </Wrapper>
);

export default MovieTile;
