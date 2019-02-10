import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelStyle = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
`

const Label = ({ className, children, htmlFor }) => (
  <LabelStyle className={className} data-testid="label" htmlFor={htmlFor}>
    {children}
  </LabelStyle>
)

Label.defaultProps = {
  className: '',
  htmlFor: '',
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
}

export default Label
