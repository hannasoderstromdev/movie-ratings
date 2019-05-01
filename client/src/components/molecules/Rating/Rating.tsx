import React from 'react'
import styled from 'styled-components'

import Button from 'components/atoms/Button'
import Star from 'components/atoms/Star'
import Icon from 'components/atoms/Icon'

const StarButton = styled.button`
  border: none;
  padding: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: ${({ small }) => (small ? '1.75rem' : '2.5rem')};
`

const RatingStyle = styled.div`
  display: flex;

  button:nth-of-type(0) {
    margin-right: 0.5rem;
  }
`

interface RatingProps {
  rating: number;
  setRating: (rating: number) => void;
  small: boolean;
  useLock?: boolean;
}

interface RatingState {
  locked: boolean;
  rating: number;
  stars: number;
}

class Rating extends React.Component<RatingProps, RatingState> {
  constructor(props: RatingProps) {
    super(props)
    this.state = {
      locked: this.props.useLock,
      rating: props.rating,
      stars: props.rating,
    }
  }

  static getDerivedStateFromProps(
    nextProps: RatingProps,
    prevState: RatingState,
  ) {
    if (nextProps.rating !== prevState.rating) {
      return { rating: nextProps.rating }
    }
    return prevState
  }

  onMouseOver = (newRating: number) => {
    if (!this.state.locked) {
      this.setState({ stars: newRating })
    }
  }

  onMouseOut = () => {
    if (!this.state.locked) {
      this.setState(prevState => ({ stars: prevState.rating }))
    }
  }

  onClickStar = (rating: number) => {
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
    return this.state.locked ? (
      <Icon color="#666" icon={['fas', 'lock']} />
    ) : (
      <Icon color="#FEDC9B" icon={['fas', 'unlock']} />
    )
  }

  render() {
    const { small, useLock, setRating } = this.props
    const { stars } = this.state
    const starsToRender = []
    for (let i = 0; i < stars; i++) {
      if (setRating) {
        starsToRender.push(
          <StarButton
            key={i + 1}
            onBlur={this.onMouseOut}
            onClick={() => this.onClickStar(i + 1)}
            onFocus={() => this.onMouseOver(i + 1)}
            onMouseOut={this.onMouseOut}
            onMouseOver={() => this.onMouseOver(i + 1)}
          >
            <Star isSelected small={small} />
          </StarButton>,
        )
      } else {
        starsToRender.push(<Star isSelected key={i + 1} small={small} />)
      }
    }
    for (let i = 0; i < 5 - stars; i++) {
      if (setRating) {
        starsToRender.push(
          <StarButton
            key={stars + 1 + i}
            onBlur={this.onMouseOut}
            onClick={() => this.onClickStar(stars + i + 1)}
            onFocus={() => this.onMouseOver(stars + 1 + i)}
            onMouseOut={this.onMouseOut}
            onMouseOver={() => this.onMouseOver(stars + 1 + i)}
          >
            <Star small={small} />
          </StarButton>,
        )
      } else {
        starsToRender.push(<Star key={stars + 1 + i} small={small} />)
      }
    }
    return (
      <RatingStyle data-testid="rating">
        {useLock && setRating && (
          <Button onClick={this.toggleLocked} thirdiary>
            {this.renderLockIcon()}
          </Button>
        )}
        {starsToRender}
      </RatingStyle>
    )
  }
}

export default Rating
