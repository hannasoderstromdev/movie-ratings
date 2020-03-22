import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'

import modalsActions from 'actions/modals/modals.actions'
import movieActions from 'actions/movies/movies.actions'

import MovieTile from 'components/molecules/MovieTile'
import MovieRow from 'components/molecules/MovieRow'

class MoviePreview extends React.Component {
  openFullMovie = () => {
    const { id, openModal, setSelectedMovie } = this.props
    setSelectedMovie(id)
    openModal({
      id: uuid(),
      type: 'movie-details',
    })
  }

  render() {
    const {
      id,
      genres,
      title,
      year,
      runtime,
      poster,
      rating,
      listStyle,
    } = this.props

    return listStyle === 'tiles' ? (
      <MovieTile
        id={id}
        openFullMovie={this.openFullMovie}
        poster={poster}
        rating={rating}
        title={title}
      />
    ) : (
      <MovieRow
        genres={genres}
        id={id}
        openFullMovie={this.openFullMovie}
        poster={poster}
        rating={rating}
        runtime={runtime}
        title={title}
        year={year}
      />
    )
  }
}

MoviePreview.defaultProps = {
  id: undefined,
  listStyle: 'rows',
  rating: 0,
}

MoviePreview.propTypes = {
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.string,
  listStyle: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.string.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
  openModal: modalsActions.openModal,
  setSelectedMovie: movieActions.setSelectedMovie,
}

export default connect(null, mapDispatchToProps)(MoviePreview)
