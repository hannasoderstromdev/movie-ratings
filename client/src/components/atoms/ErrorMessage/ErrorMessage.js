import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorStyle = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.dangerLight};
  background-color: ${({ theme }) => theme.colors.danger};
  border: 1px solid ${({ theme }) => theme.colors.dangerDark};
`

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dangerDark};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.danger};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 100%;
`

const ErrorMessage = ({ renderIcon, children }) => (
  <ErrorStyle>
    <IconWrapper>{renderIcon}</IconWrapper>
    {children}
  </ErrorStyle>
)

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  renderIcon: PropTypes.node.isRequired,
}

export default ErrorMessage
