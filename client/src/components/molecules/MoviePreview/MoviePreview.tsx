import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import modalsActions from 'actions/modals/modals.actions'
import MovieTile from 'components/molecules/MovieTile'
import MovieRow from 'components/molecules/MovieRow'

interface MoviePreviewProps {
  genres: {};
  id?: string;
  listStyle?: string;
  openModal: () => void;
  poster: string;
  rating?: number;
  runtime: string;
  title: string;
  year: string;
}

class MoviePreview extends React.Component<MoviePreviewProps, {}> {
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

const mapDispatchToProps = {
  openModal: modalsActions.openModal,
}

export default connect(
  null,
  mapDispatchToProps,
)(MoviePreview)
