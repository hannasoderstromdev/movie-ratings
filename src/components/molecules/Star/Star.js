import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../atoms/Icon'

const StarButton = styled.button`
  border: none;
  padding: 0;
`

const Star = ({ onClick, isSelected }) => (
  <StarButton onClick={onClick}>
    <Icon
      icon={['fas', 'star']}
      iconSize="1.5rem"
      color={isSelected ? '#FEDC9B' : '#666'}
    />
  </StarButton>
)

Star.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Star
