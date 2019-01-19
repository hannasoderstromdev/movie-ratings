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
  constructor(props) {
    super(props)
    this.state = {
      locked: this.props.useLock,
      rating: props.rating,
      stars: props.rating,
    }
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
        <Icon color="#666" icon={['fas', 'lock']} />
      ) : (
        <Icon color="#FEDC9B" icon={['fas', 'unlock']} />
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
          isSelected
          key={i + 1}
          onBlur={this.onMouseOut}
          onClick={() => this.onClickStar(i + 1)}
          onFocus={() => this.onMouseOver(i + 1)}
          onMouseOut={this.onMouseOut}
          onMouseOver={() => this.onMouseOver(i + 1)}
          small={small}
        />,
      )
    }

    for (let i = 0; i < 5 - stars; i++) {
      starsToRender.push(
        <Star
          key={stars + 1 + i}
          onBlur={this.onMouseOut}
          onClick={() => this.onClickStar(stars + i + 1)}
          onFocus={() => this.onMouseOver(stars + 1 + i)}
          onMouseOut={this.onMouseOut}
          onMouseOver={() => this.onMouseOver(stars + 1 + i)}
          small={small}
        />,
      )
    }

    return (
      <RatingStyle data-testid="rating">
        {starsToRender}
        {this.props.useLock && (
          <Button onClick={this.toggleLocked} thirdiary>
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
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func,
  small: PropTypes.bool,
  useLock: PropTypes.bool,
}

export default Rating
