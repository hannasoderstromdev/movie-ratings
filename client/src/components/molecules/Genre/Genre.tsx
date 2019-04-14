import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import genresThunks from "actions/genres/genres.thunks";
import Icon from "components/atoms/Icon";

const Button = styled.button`
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
`;

type GenreProps = {
  addOrRemoveGenreAndGetMovies: (...args: any[]) => any,
  filter: {},
  id: string,
  name: string
};

class Genre extends Component<GenreProps, {}> {
  toggleSelectedGenre = () => {
    const { addOrRemoveGenreAndGetMovies, id, name } = this.props;
    addOrRemoveGenreAndGetMovies({ id, name });
  };
  render() {
    const { name, filter, id } = this.props;
    return (
      <Button onClick={this.toggleSelectedGenre} selected={filter[id]}>
        {name}
        {filter[id] ? (
          <Icon icon={["fas", "minus"]} testId="minus" />
        ) : (
          <Icon icon={["fas", "plus"]} testId="plus" />
        )}
      </Button>
    );
  }
}

const mapStateToProps = ({ genres }) => ({
  filter: genres.filter
});

const mapDispatchToProps = {
  addOrRemoveGenreAndGetMovies: genresThunks.addOrRemoveGenreAndGetMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
