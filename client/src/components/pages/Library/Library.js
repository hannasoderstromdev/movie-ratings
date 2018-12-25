import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getAllMovies } from 'actions/movies/movies.actions'

import SearchLibrary from 'components/molecules/SearchLibrary'

import { H1 } from 'components/atoms/Typography'

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
  state = {
    search: '',
    results: [],
  }

  async componentDidMount() {
    await this.props.getAllMovies()
  }

  doOnSearch = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  doOnSubmit = e => {
    e.preventDefault()

    console.log('search for ', this.state.search)
  }

  render() {
    const { results } = this.state
    const { movies } = this.props
    return (
      <Page>
        <SearchLibrary
          name="search"
          onChange={this.doOnSearch}
          onSubmit={this.doOnSubmit}
        />
        <Main>
          <H1>Recent</H1>
          {movies.length ? (
            <MoviesList movies={movies} />
          ) : (
            <NoRatingsYet>No ratings added yet</NoRatingsYet>
          )}
          {!!results.length && <MoviesList movies={results} />}
        </Main>
      </Page>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies,
})

const mapDispatchToProps = {
  getAllMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library)
