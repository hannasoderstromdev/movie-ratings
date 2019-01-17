import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MovieType } from 'types'

import moviesThunks from 'actions/movies/movies.thunks'

import { H1 } from 'components/atoms/Typography'
import Spinner from 'components/atoms/Spinner'

import MoviesList from 'components/molecules/MoviesList'

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

class Library extends React.Component {
  async componentDidMount() {
    await this.props.getLatestMovies()
  }

  render() {
    const { movies } = this.props

    return movies.loading ? (
      <Page>
        <Spinner />
      </Page>
    ) : (
      <Page data-testid="library-screen">
        <Main>
          <H1>Library</H1>
          {movies && movies.movies && movies.movies.length ? (
            <MoviesList movies={movies.movies} listStyle="tiles" />
          ) : (
            <NoRatingsYet>No ratings added yet</NoRatingsYet>
          )}
        </Main>
      </Page>
    )
  }
}

Library.propTypes = {
  movies: PropTypes.shape({
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library)
