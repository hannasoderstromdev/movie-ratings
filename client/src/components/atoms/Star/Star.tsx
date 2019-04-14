import * as React from 'react'

import Icon from 'components/atoms/Icon'

interface StarProps {
  isSelected?: boolean;
  small?: boolean;
}

const Star: React.SFC<StarProps> = ({ isSelected, small }) => (
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

export default Star
