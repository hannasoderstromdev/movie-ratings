import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import moviesThunks from 'actions/movies/movies.thunks'

import Button from 'components/atoms/Button'

import MovieTile from 'components/molecules/MovieTile'
import MovieHeader from 'components/molecules/MovieHeader'
import MoviePreview from 'components/molecules/MoviePreview'
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
  constructor(props) {
    super(props)
    this.state = {
      preview: true,
      detailsOpen: false,
    }
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

    if (listStyle === 'tiles') {
      return preview ? (
        <MovieTile poster={poster} title={title} rating={rating} />
      ) : (
        <MovieTile fullSize />
      )
    }

    return preview ? (
      <MoviePreview
        toggleFullMovie={this.toggleFullMovie}
        poster={poster}
        title={title}
        year={year}
        runtime={runtime}
        genre={genre}
        rating={rating}
      />
    ) : (
      <FullMovie>
        <MovieStyle>
          <PosterImg src={poster} alt={title} onClick={this.toggleFullMovie} />
          <MovieHeader
            id={id}
            title={title}
            year={year}
            runtime={runtime}
            genre={genre}
            rating={rating}
            poster={poster}
            setRating={this.setRating}
            showDelete={showDelete}
            deleteMovie={deleteMovie}
          />
          <Button thirdiary onClick={this.toggleFullMovie}>
            <img src={contractImg} alt="minimize" />
          </Button>
        </MovieStyle>
        <MovieDetails
          country={country}
          language={language}
          ratings={ratings}
          released={released}
          plot={plot}
          production={production}
          toggle={this.toggleDetails}
          isOpen={this.state.detailsOpen}
          director={director}
          actors={actors}
          writer={writer}
        />
      </FullMovie>
    )
  }
}

Movie.defaultProps = {
  showDelete: true,
  rating: 0,
  listStyle: 'rows',
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string.isRequired,
      Value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  rating: PropTypes.number,
  released: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  showDelete: PropTypes.bool,
  listStyle: PropTypes.string,
}

const mapDispatchToProps = {
  updateMovie: moviesThunks.updateMovie,
  deleteMovie: moviesThunks.deleteMovie,
}

export default connect(
  null,
  mapDispatchToProps,
)(Movie)
