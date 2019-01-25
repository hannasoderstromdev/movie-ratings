import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => (color ? color : theme.lightGray)};
  font-size: ${({ iconsize }) => (iconsize ? iconsize : '1rem')};
  svg {
    font-size: ${({ iconsize }) => (iconsize ? iconsize : '1rem')};
  }
`

const Icon = ({ color, icon, iconsize, onMouseOver, onMouseOut }) => (
  <IconStyle
    color={color}
    data-testid="icon"
    icon={icon}
    iconsize={iconsize}
    onBlur={onMouseOut}
    onFocus={onMouseOver}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
  />
)

Icon.defaultProps = {
  color: '',
  iconsize: '1rem',
  onMouseOut: null,
  onMouseOver: null,
}

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  iconsize: PropTypes.string,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
}

export default Icon
