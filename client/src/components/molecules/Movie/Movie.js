import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import MovieHeader from 'components/molecules/MovieHeader'
import MoviePreview from 'components/molecules/MoviePreview'
import MovieDetails from 'components/molecules/MovieDetails'

const MovieStyle = styled.article`
  display: grid;
  grid-template-columns: 2.5fr 5fr;
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

  toggleFullMovie = () => {
    this.setState({
      preview: false,
    })
  }

  toggleDetails = () =>
    this.setState(prevState => ({
      detailsOpen: !prevState.detailsOpen,
    }))

  render() {
    const {
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
    } = this.props

    return this.state.preview ? (
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
      <div>
        <MovieStyle>
          <PosterImg src={poster} alt={title} />
          <MovieHeader
            title={title}
            year={year}
            runtime={runtime}
            genre={genre}
            rating={rating}
            poster={poster}
          />
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
      </div>
    )
  }
}

Movie.propTypes = {
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
}

export default Movie
