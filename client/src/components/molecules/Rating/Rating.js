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

  onClickStar = rating => {
    const { setRating } = this.props
    if (setRating) {
      setRating(rating)
    }
  }

  render() {
    const { small } = this.props
    const { stars } = this.state

    const starsToRender = []
    for (let i = 0; i < stars; i++) {
      starsToRender.push(
        <Star
          small={small}
          key={i + 1}
          isSelected
          onClick={() => this.onClickStar(i + 1)}
          onMouseOver={() => this.onMouseOver(i + 1)}
          onMouseOut={this.onMouseOut}
        />,
      )
    }

    for (let i = 0; i < 5 - stars; i++) {
      starsToRender.push(
        <Star
          small={small}
          key={stars + 1 + i}
          onClick={() => this.onClickStar(stars + i + 1)}
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
  small: false,
}

Rating.propTypes = {
  setRating: PropTypes.func,
  rating: PropTypes.number.isRequired,
  small: PropTypes.bool,
}

export default Rating
