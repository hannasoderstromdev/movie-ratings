import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MovieType } from 'types'

import moviesThunks from 'actions/movies/movies.thunks'

import { H1, TextDark } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import FullscreenSpinner from 'components/molecules/FullscreenSpinner'
import Pagination from 'components/molecules/Pagination'

import FilterByRating from 'components/organisms/FilterByRating'
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

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-bottom: 1rem;
`

class Library extends React.Component {
  state = {
    listStyle: 'rows',
  }

  setStyleRows = () => this.setState({ listStyle: 'rows' })

  setStyleTiles = () => this.setState({ listStyle: 'tiles' })

  async componentDidMount() {
    await this.props.getAllMovies({ limit: 10, page: 1 })
  }

  onFilterByRating = rating => {
    if (rating === 'none') {
      this.props.getLatestMovies()
    } else {
      this.props.filterByRating(rating)
    }
  }

  onPageChange = page => {
    this.props.getAllMovies({ limit: 10, page })
  }

  render() {
    const { movies } = this.props
    const { listStyle } = this.state

    return (
      <Page data-testid="library-screen">
        <Main>
          <TopWrapper>
            <H1>Library</H1>
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
          </TopWrapper>
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

Library.propTypes = {
  filterByRating: PropTypes.func.isRequired,
  getAllMovies: PropTypes.func.isRequired,
  getLatestMovies: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    numberOfItems: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape(MovieType)).isRequired,
    error: PropTypes.bool,
  }).isRequired,
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = {
  getAllMovies: moviesThunks.getAllMovies,
  getLatestMovies: moviesThunks.getLatestMovies,
  filterByRating: moviesThunks.filterByRating,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library)
