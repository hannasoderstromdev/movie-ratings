import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import moviesThunks from 'actions/movies/movies.thunks'

import { TextDark, Text } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'
import Message from 'components/atoms/Message'

import FullscreenSpinner from 'components/molecules/FullscreenSpinner'
import Rating from 'components/molecules/Rating'

import MovieFull from 'components/organisms/MovieFull'

const MarginTop = styled.div`
  margin-top: 2rem;
`

const MessageWithMargins = styled(Message)`
  margin-bottom: 2rem;
`

const SearchResult = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const SearchForTitle = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`

const RateWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class RateNewMovie extends Component {
  state = {
    rating: 0,
  }

  setRating = rating =>
    this.setState({
      rating,
    })

  saveNewRating = async () => {
    const { createMovie, movie, history } = this.props
    const newMovie = {
      ...movie,
      rating: this.state.rating,
    }
    await createMovie(newMovie)
    await history.push('/')
  }

  render() {
    const { loading, movie } = this.props

    if (loading) return <FullscreenSpinner />

    return movie && movie.title ? (
      <div>
        <SearchResult>
          <TextDark>Search result</TextDark>
        </SearchResult>
        {movie.inLibrary && (
          <MessageWithMargins>
            <Text>This movie already exists in the library</Text>
          </MessageWithMargins>
        )}
        <MarginTop>
          <MovieFull {...movie} />
        </MarginTop>
        <RateWrapper>
          {!movie.inLibrary && (
            <>
              <span>Rate this movie</span>
              <Rating
                rating={this.state.rating}
                setRating={this.setRating}
                useLock={false}
              />
              <Button
                disabled={this.state.rating === 0}
                onClick={this.saveNewRating}
              >
                Save
              </Button>
            </>
          )}
        </RateWrapper>
      </div>
    ) : (
      <SearchForTitle>Search for a movie to add</SearchForTitle>
    )
  }
}

RateNewMovie.defaultProps = {
  movie: null,
}

RateNewMovie.propTypes = {
  loading: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    actors: PropTypes.string.isRequired,
    awards: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    metascore: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    production: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    released: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
}

const mapStateToProps = ({ search }) => ({
  ...search,
})

const mapDispatchToProps = {
  createMovie: moviesThunks.createMovie,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RateNewMovie),
)
