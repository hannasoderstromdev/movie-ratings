import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ rating }) => <div>{rating}</div>

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Rating
