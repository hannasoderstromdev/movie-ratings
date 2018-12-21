import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Primary = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, disabled }) =>
    disabled && theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid
    ${({ theme, disabled }) => disabled && theme.colors.darkGray};
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
  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  }
`

const Secondary = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
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

const Button = ({ secondary, children, onClick, disabled, type }) => {
  if (secondary) {
    return (
      <Secondary
        data-testid="secondary-button"
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </Secondary>
    )
  }

  return (
    <Primary
      data-testid="primary-button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </Primary>
  )
}

Button.defaultProps = {
  type: null,
  disabled: false,
  onClick: null,
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

export default Button
