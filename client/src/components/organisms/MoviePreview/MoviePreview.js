import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import modalsActions from 'actions/modals/modals.actions'

import MovieTile from 'components/molecules/MovieTile'
import MovieRow from 'components/molecules/MovieRow'

class Movie extends React.Component {
  openFullMovie = () => {
    const { id } = this.props
    this.props.openModal({
      id: uuid(),
      type: 'movie-details',
      content: {
        movieId: id,
      },
    })
  }

  render() {
    const {
      genre,
      title,
      year,
      runtime,
      poster,
      rating,
      listStyle,
    } = this.props

    return listStyle === 'tiles' ? (
      <MovieTile
        openFullMovie={this.openFullMovie}
        poster={poster}
        rating={rating}
        title={title}
      />
    ) : (
      <MovieRow
        genre={genre}
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

Movie.defaultProps = {
  listStyle: 'rows',
  rating: 0,
}

Movie.propTypes = {
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  listStyle: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
  openModal: modalsActions.openModal,
}

export default connect(
  null,
  mapDispatchToProps,
)(Movie)
