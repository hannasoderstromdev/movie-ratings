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
  <StarButton onClick={onClick} data-testid="star">
    <Icon
      icon={['fas', 'star']}
      iconsize={small ? '1.75rem' : '2.5rem'}
      color={isSelected ? '#FEDC9B' : '#666'}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  </StarButton>
)

Star.defaultProps = {
  isSelected: false,
  onClick: null,
  small: false,
}

Star.propTypes = {
  small: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
}

export default Star
