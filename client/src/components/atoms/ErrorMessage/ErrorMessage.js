import React from 'react'
import styled from 'styled-components'

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

const ErrorMessage = ({ renderIcon, children }, props) => (
  <ErrorStyle>
    <IconWrapper>{renderIcon}</IconWrapper>
    {children}
  </ErrorStyle>
)

export default ErrorMessage
