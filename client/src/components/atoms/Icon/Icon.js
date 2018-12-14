import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => (color ? color : theme.lightGray)};
  font-size: ${({ iconSize }) => (iconSize ? iconSize : '1rem')};
`

const Icon = ({ color, icon, iconSize, onMouseOver, onMouseOut }) => (
  <IconStyle
    color={color}
    icon={icon}
    iconSize={iconSize}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  />
)

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  iconSize: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
}

export default Icon
