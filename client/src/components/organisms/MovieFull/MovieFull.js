import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import moviesThunks from 'actions/movies/movies.thunks'

import MovieHeader from 'components/molecules/MovieHeader'
import MovieDetails from 'components/molecules/MovieDetails'

const FullMovie = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const MovieStyle = styled.article`
  display: grid;
  grid-template-columns: 2.5fr 5fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`

const PosterImg = styled.img`
  width: 100%;
  height: auto;
`

class MovieFull extends React.Component {
  state = {
    detailsOpen: false,
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
      genre,
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
      writer,
      showDelete,
    } = this.props

    return (
      <FullMovie data-testid="full-movie">
        <MovieStyle>
          <PosterImg alt={title} src={poster} />
          <MovieHeader
            deleteMovie={this.onDelete}
            genre={genre}
            id={id}
            poster={poster}
            rating={rating}
            runtime={runtime}
            setRating={this.setRating}
            showDelete={showDelete}
            title={title}
            year={year}
          />
        </MovieStyle>
        <MovieDetails
          actors={actors}
          country={country}
          director={director}
          isOpen={this.state.detailsOpen}
          language={language}
          plot={plot}
          production={production}
          ratings={ratings}
          released={released}
          toggle={this.toggleDetails}
          writer={writer}
        />
      </FullMovie>
    )
  }
}

MovieFull.defaultProps = {
  onClose: null,
  rating: 0,
  showDelete: false,
}

MovieFull.propTypes = {
  actors: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  rating: PropTypes.number,
  ratings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  released: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  showDelete: PropTypes.bool,
  title: PropTypes.string.isRequired,
  updateMovie: PropTypes.func.isRequired,
  writer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

const mapStateToProps = ({ movies }, { movieId }) => {
  const movieFound =
    movies &&
    movies.movies.length &&
    movies.movies.find(movie => movie.id === movieId)

  if (movieFound) {
    return {
      ...movieFound,
    }
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
