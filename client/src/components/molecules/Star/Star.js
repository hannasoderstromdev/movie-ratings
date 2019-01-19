import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/atoms/Icon'

const StarButton = styled.button`
  border: none;
  padding: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

const Star = ({ onClick, isSelected, onMouseOver, onMouseOut, small }) => (
  <StarButton data-testid="star" onClick={onClick}>
    <Icon
      color={isSelected ? '#FEDC9B' : '#666'}
      icon={['fas', 'star']}
      iconsize={small ? '1.75rem' : '2.5rem'}
      onBlur={onMouseOut}
      onFocus={onMouseOver}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    />
  </StarButton>
)

Star.defaultProps = {
  isSelected: false,
  onClick: null,
  small: false,
}

Star.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOut: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  small: PropTypes.bool,
}

export default Star
