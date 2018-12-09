import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => (color ? color : theme.lightGray)};
  font-size: ${({ size }) => (size ? size : '1rem')};
`

const Icon = ({ color, icon, size }) => (
  <IconStyle color={color} icon={icon} size={size} />
)

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string,
}

export default Icon
