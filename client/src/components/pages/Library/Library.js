import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MovieType } from 'types'

import moviesThunks from 'actions/movies/movies.thunks'

import { H1 } from 'components/atoms/Typography'
import Spinner from 'components/atoms/Spinner'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

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

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`

class Library extends React.Component {
  state = {
    listStyle: 'rows',
  }

  setStyleRows = () => this.setState({ listStyle: 'rows' })

  setStyleTiles = () => this.setState({ listStyle: 'tiles' })

  async componentDidMount() {
    await this.props.getLatestMovies()
  }

  render() {
    const { movies } = this.props
    const { listStyle } = this.state

    return movies.loading ? (
      <Page>
        <Spinner />
      </Page>
    ) : (
      <Page data-testid="library-screen">
        <Main>
          <TopWrapper>
            <H1>Library</H1>
            <ButtonWrapper>
              <Button onClick={this.setStyleRows} secondary>
                <Icon
                  color={listStyle === 'rows' ? '#FEDC9B' : '#666'}
                  icon={['fas', 'th-list']}
                  iconsize="2.6rem"
                />
              </Button>
              <Button onClick={this.setStyleTiles} secondary>
                <Icon
                  color={listStyle === 'tiles' ? '#FEDC9B' : '#666'}
                  icon={['fas', 'th']}
                  iconsize="2.6rem"
                />
              </Button>
            </ButtonWrapper>
          </TopWrapper>
          {movies && movies.movies && movies.movies.length ? (
            <MoviesList
              listStyle={this.state.listStyle}
              movies={movies.movies}
            />
          ) : (
            <NoRatingsYet>No ratings added yet</NoRatingsYet>
          )}
        </Main>
      </Page>
    )
  }
}

Library.propTypes = {
  // getAllMovies: PropTypes.func.isRequired,
  getLatestMovies: PropTypes.func.isRequired,
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
