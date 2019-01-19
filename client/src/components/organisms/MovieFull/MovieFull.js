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
  grid-gap: 1.5rem;
  margin-bottom: 1rem;
`

const PosterImg = styled.img`
  max-width: 40vw;
  height: auto;
`

class MovieFull extends React.Component {
  state = {
    detailsOpen: false,
    showDelete: false,
  }

  toggleDetails = () =>
    this.setState(prevState => ({
      detailsOpen: !prevState.detailsOpen,
    }))

  setRating = async rating => {
    const { updateMovie, id } = this.props
    await updateMovie(id, { rating })
  }

  getMovie = movieId => {
    return this.props.movies.filter(movie => movie.id === movieId)
  }

  render() {
    const { deleteMovie, movieId } = this.props
    const { showDelete } = this.state

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
    } = this.getMovie(movieId)

    return (
      <FullMovie>
        <MovieStyle>
          <PosterImg alt={title} src={poster} />
          <MovieHeader
            deleteMovie={deleteMovie}
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
  rating: 0,
}

MovieFull.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      actors: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      production: PropTypes.string.isRequired,
      rating: PropTypes.number,
      ratings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      released: PropTypes.string.isRequired,
      runtime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updateMovie: PropTypes.func.isRequired,
}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = {
  updateMovie: moviesThunks.updateMovie,
  deleteMovie: moviesThunks.deleteMovie,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieFull)
