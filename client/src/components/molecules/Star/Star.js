import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../atoms/Icon'

const StarButton = styled.button`
  border: none;
  padding: 0;
  outline: none;
`

const Star = ({ onClick, isSelected, onMouseOver, onMouseOut }) => (
  <StarButton onClick={onClick}>
    <Icon
      icon={['fas', 'star']}
      iconSize="1.5rem"
      color={isSelected ? '#FEDC9B' : '#666'}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  </StarButton>
)

Star.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
}

export default Star
