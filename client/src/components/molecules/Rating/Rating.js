import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Star from '../Star'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

const RatingStyle = styled.div`
  display: flex;

  button:nth-of-type(6) {
    margin-left: 1rem;
  }
`

class Rating extends React.Component {
  state = {
    locked: this.props.useLock,
    rating: 0,
    stars: 0,
  }

  componentDidMount() {
    this.setState({ rating: this.props.rating, stars: this.props.rating })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rating !== prevState.rating) {
      return { rating: nextProps.rating }
    }
    return prevState
  }

  onMouseOver = newRating => {
    if (!this.state.locked) {
      this.setState({ stars: newRating })
    }
  }

  onMouseOut = () => {
    if (!this.state.locked) {
      this.setState(prevState => ({ stars: prevState.rating }))
    }
  }

  onClickStar = rating => {
    if (!this.state.locked) {
      const { setRating } = this.props
      if (setRating) {
        setRating(rating)
      }
    }
  }

  toggleLocked = () => {
    this.setState(prevState => ({
      locked: !prevState.locked,
    }))
  }

  renderLockIcon() {
    if (this.props.setRating) {
      return this.state.locked ? (
        <Icon icon={['fas', 'lock']} color="#666" />
      ) : (
        <Icon icon={['fas', 'unlock']} color="#FEDC9B" />
      )
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

    return (
      <RatingStyle data-testid="rating">
        {starsToRender}
        {this.props.useLock && (
          <Button thirdiary onClick={this.toggleLocked}>
            {this.renderLockIcon()}
          </Button>
        )}
      </RatingStyle>
    )
  }
}

Rating.defaultProps = {
  setRating: null,
  small: false,
  useLock: true,
}

Rating.propTypes = {
  setRating: PropTypes.func,
  rating: PropTypes.number.isRequired,
  small: PropTypes.bool,
  useLock: PropTypes.bool,
}

export default Rating
