import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

// import { MovieType } from 'types'

import moviesThunks from 'actions/movies/movies.thunks'
import genresThunks from 'actions/genres/genres.thunks'

import { H1, TextDark } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import FullscreenSpinner from 'components/molecules/FullscreenSpinner'
import Pagination from 'components/molecules/Pagination'

import FilterByRating from 'components/organisms/FilterByRating'
import FilterByGenre from 'components/organisms/FilterByGenre'
import MoviesList from 'components/organisms/MoviesList'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

const NoRatingsYet = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`

const TopWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  width: 7rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 2rem;
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FilterByGenreBtn = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;

  svg {
    margin-left: 0.5rem;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

// interface LibraryProps {
//   getAllGenres: () => void;
//   getMovies: ({ limit: number, page: number }) => void;
//   movies: {
//     numberOfItems: number,
//     limit: number,
//     page: number,
//     loading: boolean,
//     movies: MovieType[],
//     error?: boolean,
//     genres: string[],
//     rating: number,
//   };
// }

// interface LibraryState {
//   listStyle: string;
//   filterByGenreOpen: boolean;
// }

class Library extends React.Component {
  state = {
    listStyle: 'rows',
    filterByGenreOpen: false,
  }

  setStyleRows = () => this.setState({ listStyle: 'rows' })

  setStyleTiles = () => this.setState({ listStyle: 'tiles' })

  async componentDidMount() {
    await this.props.getMovies({ limit: 10, page: 1 })
    await this.props.getAllGenres()
  }

  onFilterByRating = rating => {
    const { getMovies, movies } = this.props
    getMovies({
      limit: 10,
      page: 1,
      rating,
      genres: movies.genres,
    })
  }

  onFilterByGenres = genres => {
    const { getMovies, movies } = this.props
    getMovies({
      limit: 10,
      page: 1,
      rating: movies.rating,
      genres,
    })
  }

  onPageChange = page => {
    const { getMovies, movies } = this.props
    getMovies({
      limit: 10,
      page,
      rating: movies.rating,
      genres: movies.genres,
    })
  }

  toggleFilterByGenreOpen = () => {
    this.setState(prevState => ({
      filterByGenreOpen: !prevState.filterByGenreOpen,
    }))
  }

  render() {
    const { movies } = this.props
    const { listStyle, filterByGenreOpen } = this.state
    return (
      <Page data-testid="library-screen">
        <Main>
          <TopWrapper>
            <H1>Library</H1>
            <FilterWrapper>
              <FilterByGenreBtn onClick={this.toggleFilterByGenreOpen}>
                Filter by genres
                {filterByGenreOpen ? (
                  <Icon color="#F3F3F3" icon={['fas', 'chevron-up']} />
                ) : (
                  <Icon color="#F3F3F3" icon={['fas', 'chevron-down']} />
                )}
              </FilterByGenreBtn>
              <FilterByRating filterByRating={this.onFilterByRating} />
              <ButtonWrapper>
                <Button onClick={this.setStyleRows} thirdiary>
                  <Icon
                    color={listStyle === 'rows' ? '#FEDC9B' : '#666'}
                    icon={['fas', 'th-list']}
                    iconsize="2.6rem"
                  />
                </Button>
                <Button onClick={this.setStyleTiles} thirdiary>
                  <Icon
                    color={listStyle === 'tiles' ? '#FEDC9B' : '#666'}
                    icon={['fas', 'th']}
                    iconsize="2.6rem"
                  />
                </Button>
              </ButtonWrapper>
            </FilterWrapper>
          </TopWrapper>
          <FilterByGenre isOpen={filterByGenreOpen} />
          <Center>
            <TextDark>
              {movies.limit * (movies.page - 1) + 1}
              {'-'}
              {movies.limit * (movies.page - 1) + movies.movies.length}
              {' of '}
              {movies.numberOfItems}
            </TextDark>
          </Center>
          {movies.loading && <FullscreenSpinner />}
          {movies && movies.movies && movies.movies.length ? (
            <>
              <MoviesList
                listStyle={this.state.listStyle}
                movies={movies.movies}
              />
              <Pagination
                currentPage={movies.page}
                itemsTotal={movies.numberOfItems}
                onPageChange={this.onPageChange}
                pageLimit={movies.limit}
                pageNeighbors={1}
              />
            </>
          ) : (
            <NoRatingsYet>Nothing found</NoRatingsYet>
          )}
        </Main>
      </Page>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = {
  getAllGenres: genresThunks.getAll,
  getMovies: moviesThunks.getMovies,
  getLatestMovies: moviesThunks.getLatestMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library)
