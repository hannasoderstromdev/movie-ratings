import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/atoms/Icon'

const Star = ({ isSelected, small }) => (
  <Icon
    color={isSelected ? '#FEDC9B' : '#666'}
    icon={['fas', 'star']}
    iconsize={small ? '1.75rem' : '2.5rem'}
  />
)

Star.defaultProps = {
  isSelected: false,
  small: false,
}

Star.propTypes = {
  isSelected: PropTypes.bool,
  small: PropTypes.bool,
}

export default Star
