import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import moviesThunks from 'actions/movies/movies.thunks'

import Button from 'components/atoms/Button'

import MovieTile from 'components/molecules/MovieTile'
import MovieRow from 'components/molecules/MovieRow'
import MovieHeader from 'components/molecules/MovieHeader'
import MovieDetails from 'components/molecules/MovieDetails'

import contractImg from './contract.png'

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

class Movie extends React.Component {
  state = {
    preview: true,
    detailsOpen: false,
  }

  setRating = async rating => {
    await this.props.updateMovie(this.props.id, { rating })
  }

  toggleFullMovie = () => {
    this.setState(prevState => ({
      preview: !prevState.preview,
    }))
  }

  toggleDetails = () =>
    this.setState(prevState => ({
      detailsOpen: !prevState.detailsOpen,
    }))

  render() {
    const {
      id,
      country,
      genre,
      language,
      title,
      year,
      runtime,
      actors,
      director,
      plot,
      poster,
      production,
      rating,
      ratings,
      released,
      writer,
      deleteMovie,
      showDelete,
      listStyle,
    } = this.props

    const { preview } = this.state

    if (preview) {
      return listStyle === 'tiles' ? (
        <MovieTile poster={poster} rating={rating} title={title} />
      ) : (
        <MovieRow
          genre={genre}
          poster={poster}
          rating={rating}
          runtime={runtime}
          title={title}
          toggleFullMovie={this.toggleFullMovie}
          year={year}
        />
      )
    }

    return (
      <FullMovie>
        <MovieStyle>
          <PosterImg alt={title} onClick={this.toggleFullMovie} src={poster} />
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
          <Button onClick={this.toggleFullMovie} thirdiary>
            <img alt="minimize" src={contractImg} />
          </Button>
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

Movie.defaultProps = {
  listStyle: 'rows',
  rating: 0,
  showDelete: true,
}

Movie.propTypes = {
  actors: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  listStyle: PropTypes.string,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  rating: PropTypes.number,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string.isRequired,
      Value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  released: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  showDelete: PropTypes.bool,
  title: PropTypes.string.isRequired,
  updateMovie: PropTypes.func.isRequired,
  writer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
  updateMovie: moviesThunks.updateMovie,
  deleteMovie: moviesThunks.deleteMovie,
}

export default connect(
  null,
  mapDispatchToProps,
)(Movie)
