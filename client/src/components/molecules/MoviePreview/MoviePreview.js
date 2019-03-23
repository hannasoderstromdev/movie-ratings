import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import modalsActions from 'actions/modals/modals.actions'

import MovieTile from 'components/molecules/MovieTile'
import MovieRow from 'components/molecules/MovieRow'

class MoviePreview extends React.Component {
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
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
  openModal: modalsActions.openModal,
}

export default connect(
  null,
  mapDispatchToProps,
)(MoviePreview)
