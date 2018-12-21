import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => (color ? color : theme.lightGray)};
  font-size: ${({ iconsize }) => (iconsize ? iconsize : '1rem')};
`

const Icon = ({ color, icon, iconsize, onMouseOver, onMouseOut }) => (
  <IconStyle
    color={color}
    icon={icon}
    iconsize={iconsize}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  />
)

Icon.defaultProps = {
  iconsize: '1rem',
  color: '#000',
  onMouseOver: null,
  onMouseOut: null,
}

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  iconsize: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
}

export default Icon
