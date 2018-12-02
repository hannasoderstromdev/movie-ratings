import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Primary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 30px;
  min-width: 30px;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  margin: 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  }
`

const Button = ({ children, onClick, disabled }) => (
  <Primary onClick={onClick} disabled={disabled}>
    {children}
  </Primary>
)

Button.defaultProps = {
  disabled: false,
  onClick: () => console.log('clicked'),
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
