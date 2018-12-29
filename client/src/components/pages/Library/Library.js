import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MovieType } from 'types'

import { getAllMovies } from 'actions/movies/movies.actions'

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
    await this.props.getAllMovies()
  }

  render() {
    const { movies } = this.props

    // if (movies.error) return <Page />

    return movies.loading ? (
      <Page>
        <Spinner />
      </Page>
    ) : (
      <Page>
        <Main>
          <H1>Recent</H1>
          {movies && movies.movies && movies.movies.length ? (
            <MoviesList movies={movies.movies} />
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
    movies: PropTypes.arrayOf(PropTypes.shape(MovieType)),
    error: PropTypes.bool,
  }).isRequired,
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = {
  getAllMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library)
