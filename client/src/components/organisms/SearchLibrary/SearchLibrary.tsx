import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { MovieType } from 'types'

import moviesThunks from 'actions/movies/movies.thunks'

import Icon from 'components/atoms/Icon'

const Wrapper = styled.form`
  width: 100%;
  min-height: 7vh;
  flex: 1;
  display: flex;
  position: relative;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.75);
`

const SearchLibraryField = styled.input`
  height: 100%;
  flex: 1.9;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 2rem;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-style: italic;
  color: ${({ theme }) => theme.colors.textPrimary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
    opacity: 1;
  }
`

const SearchButton = styled.button`
  flex: 0.1;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  &:focus {
    border: 1px solid transparent;
  }
`

interface SearchLibraryProps {
  findMovieByTitle: (title: string) => void;
  getMovies: (props: {
    limit: number,
    page: number,
    genres: string[],
    rating: number,
  }) => void;
  movies: {
    genres: string[],
    rating: number,
    showSearchLibrary: boolean,
    movies: MovieType,
  };
}

interface SearchLibraryState {
  title: string;
}

class SearchLibrary extends React.Component<
  SearchLibraryProps,
  // eslint-disable-next-line prettier/prettier
  SearchLibraryState
> {
  state = {
    title: '',
  }

  doOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value })
  }

  doOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { title } = this.state
    const { findMovieByTitle, getMovies, movies } = this.props
    if (title.length) {
      findMovieByTitle(title)
    } else {
      getMovies({
        limit: 10,
        page: 1,
        genres: movies.genres,
        rating: movies.rating,
      })
    }
  }

  render() {
    const { movies } = this.props
    return movies && movies.showSearchLibrary ? (
      <Wrapper data-testid="wrapper" onSubmit={this.doOnSubmit}>
        <SearchLibraryField
          data-testid="search-field"
          name="title"
          onChange={this.doOnChange}
          placeholder="Search library..."
          type="search"
          value={this.state.title}
        />
        <SearchButton data-testid="search-button" type="submit">
          <Icon icon={['fas', 'search']} iconsize="1rem" />
        </SearchButton>
      </Wrapper>
    ) : null
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = {
  findMovieByTitle: moviesThunks.findMovieByTitle,
  getMovies: moviesThunks.getMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchLibrary)
