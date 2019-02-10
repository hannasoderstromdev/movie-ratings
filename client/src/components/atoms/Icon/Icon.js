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

const Icon = ({
  className,
  color,
  icon,
  iconsize,
  onMouseOver,
  onMouseOut,
}) => (
  <IconStyle
    className={className}
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
  className: '',
  color: '',
  iconsize: '1rem',
  onMouseOut: null,
  onMouseOver: null,
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  iconsize: PropTypes.string,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
}

export default Icon
