import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import moviesThunks from 'actions/movies/movies.thunks'

import { MovieType } from 'types'

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

interface RateNewMovieProps {
  createMovie: () => void;
  history: {
    push: () => void,
  };
  loading: boolean;
  movie?: MovieType;
  userRole: string;
  user: {
    profile: {
      user: {
        role: string,
      },
    },
  };
}

interface RateNewMovieState {
  rating: number;
}

class RateNewMovie extends Component<RateNewMovieProps, RateNewMovieState> {
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
    const { loading, movie, userRole } = this.props
    if (loading) return <FullscreenSpinner />
    return movie && movie.title ? (
      <div>
        <SearchResult>
          <TextDark>Search result</TextDark>
        </SearchResult>
        {userRole !== 'Admin' && (
          <MessageWithMargins>
            <Text>Your account is not allowed to add movies</Text>
          </MessageWithMargins>
        )}
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
  rating: 0,
}

const mapStateToProps = ({ search, user }) => ({
  ...search,
  userRole: user && user.profile && user.profile.user && user.profile.user.role,
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