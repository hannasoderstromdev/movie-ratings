import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelStyle = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
`

const Label = ({ children, htmlFor }) => (
  <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
)

Label.defaultProps = {
  htmlFor: '',
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
}

export default Label
