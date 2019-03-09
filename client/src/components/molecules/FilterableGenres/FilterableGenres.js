import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Genres from 'components/molecules/Genres'

class FilterableGenres extends Component {
  toggleSelectedGenre = () => {}

  render() {
    const { genres } = this.props
    return <Genres genres={genres} onClick={this.toggleSelectedGenre} />
  }
}

FilterableGenres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
}

export default FilterableGenres
