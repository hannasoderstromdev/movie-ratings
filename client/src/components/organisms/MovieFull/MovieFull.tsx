import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { MovieType, User } from 'types'

import moviesThunks from 'actions/movies/movies.thunks'

import MovieHeader from 'components/molecules/MovieHeader'
import MovieDetails from 'components/molecules/MovieDetails'

const FullMovie = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const MovieStyle = styled.article`
  display: grid;
  grid-template-columns: 2.5fr 5fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`

const PosterImg = styled.img`
  width: 100%;
  height: auto;
`

interface MovieFullProps {
  deleteMovie: (id: string) => void;
  onClose?: () => void;
  updateMovie: (id: string, {}) => void;
  title: string;
  poster: string;
  genres: { Source: string, Value: string }[];
  id: string;
  rating: number;
  runtime: string;
  year: string;
  actors: string;
  country: string;
  director: string;
  language: string;
  plot: string;
  production: string;
  ratings: {};
  released: string;
  userRole: string;
  writer: string;
  showDelete: () => boolean;
}

interface MovieFullState {
  detailsOpen: boolean;
}

class MovieFull extends React.Component<MovieFullProps, MovieFullState> {
  state = {
    detailsOpen: true,
  }

  onDelete = (id: string) => {
    const { deleteMovie, onClose } = this.props
    deleteMovie(id)
    if (onClose) {
      onClose()
    }
  }

  toggleDetails = () =>
    this.setState(prevState => ({
      detailsOpen: !prevState.detailsOpen,
    }))

  setRating = async (rating: number) => {
    const { updateMovie, id } = this.props
    await updateMovie(id, { rating })
  }

  render() {
    const {
      title,
      poster,
      genres,
      id,
      rating,
      runtime,
      year,
      actors,
      country,
      director,
      language,
      plot,
      production,
      ratings,
      released,
      userRole,
      writer,
      showDelete,
    } = this.props
    const { detailsOpen } = this.state
    const setRating = userRole === 'Admin' ? this.setRating : null
    const showDeleteSetting = userRole === 'Admin' && showDelete

    return title ? (
      <FullMovie data-testid="full-movie">
        <MovieStyle>
          <PosterImg alt={title} src={poster} />
          <MovieHeader
            deleteMovie={this.onDelete}
            genres={genres}
            id={id}
            poster={poster}
            rating={rating}
            runtime={runtime}
            setRating={setRating}
            showDelete={showDeleteSetting}
            title={title}
            year={year}
          />
        </MovieStyle>
        <MovieDetails
          actors={actors}
          country={country}
          director={director}
          isOpen={detailsOpen}
          language={language}
          plot={plot}
          production={production}
          ratings={ratings}
          released={released}
          toggle={this.toggleDetails}
          writer={writer}
        />
      </FullMovie>
    ) : null
  }
}

const mapStateToProps = (
  {
    movies,
    user,
  }: {
    movies: {
      loading: boolean,
      movies: {
        id: string,
      }[],
      error: null,
      numberOfItems: number,
      limit: number,
      page: number,
      showSearchLibrary: boolean,
      genres: [],
      rating: number,
    },
    user: {
      loggingIn: boolean,
      loggedIn: boolean,
      profile: {
        user: {
          role: string,
        },
      },
      error: boolean,
    },
  },
  { movieId }: { movieId: string },
) => {
  const movieFound =
    movies &&
    movies.movies.length &&
    movies.movies.find(movie => movie.id === movieId)
  const userRole =
    user && user.profile && user.profile.user && user.profile.user.role
  if (movieFound) {
    return {
      ...movieFound,
      userRole,
    }
  }
  return {
    userRole,
  }
}

const mapDispatchToProps = {
  updateMovie: moviesThunks.updateMovie,
  deleteMovie: moviesThunks.deleteMovie,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieFull)
