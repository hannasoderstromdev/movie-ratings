import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { MovieType } from 'types'

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
  onClose?: () => void;
  updateMovie: () => void;
  userRole: string;
}

interface MovieFullState {
  detailsOpen: boolean;
}

class MovieFull extends React.Component<MovieFullProps, MovieFullState> {
  state = {
    detailsOpen: true,
  }

  onDelete = id => {
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

  setRating = async rating => {
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

MovieFull.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'MovieFull',
}

MovieFull.defaultProps = {
  id: null,
  onClose: null,
  rating: 0,
  showDelete: false,
}

const mapStateToProps = ({ movies, user }, { movieId }) => {
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
