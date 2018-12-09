import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Star from '../Star'

const RatingStyle = styled.div`
  display: flex;
`

const Rating = ({ rating, increase, decrease }) => {
  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} isSelected onClick={decrease} />)
  }

  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<Star key={stars.length + i} onClick={increase} />)
  }
  return <RatingStyle>{stars}</RatingStyle>
}

Rating.propTypes = {
  decrease: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
}

export default Rating
