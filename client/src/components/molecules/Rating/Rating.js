import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Star from '../Star'

const RatingStyle = styled.div`
  display: flex;
`

class Rating extends React.Component {
  state = {
    rating: 0,
    stars: 0,
  }

  componentDidMount() {
    this.setState({ rating: this.props.rating, stars: this.props.rating })
  }

  onMouseOver = newRating => {
    this.setState({ stars: newRating })
  }

  onMouseOut = () => {
    this.setState(prevState => ({ stars: prevState.rating }))
  }

  render() {
    const { setRating } = this.props
    const { stars } = this.state

    const starsToRender = []
    for (let i = 0; i < stars; i++) {
      starsToRender.push(
        <Star
          key={i + 1}
          isSelected
          onClick={() => setRating(i + 1)}
          onMouseOver={() => this.onMouseOver(i + 1)}
          onMouseOut={this.onMouseOut}
        />,
      )
    }

    for (let i = 0; i < 5 - stars; i++) {
      starsToRender.push(
        <Star
          key={stars + 1 + i}
          onClick={() => setRating(stars + i + 1)}
          onMouseOver={() => this.onMouseOver(stars + 1 + i)}
          onMouseOut={this.onMouseOut}
        />,
      )
    }

    return <RatingStyle data-testid="rating">{starsToRender}</RatingStyle>
  }
}

Rating.defaultProps = {
  setRating: null,
}

Rating.propTypes = {
  setRating: PropTypes.func,
  rating: PropTypes.number.isRequired,
}

export default Rating
