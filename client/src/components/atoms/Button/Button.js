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
  border-radius: 3px;
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

const Thirdiary = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  height: 30px;
  min-width: 30px;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:focus {
    border: 1px solid transparent;
  }
`

const Button = ({
  className,
  thirdiary,
  secondary,
  children,
  onClick,
  disabled,
  type,
}) => {
  if (secondary) {
    return (
      <Secondary
        className={className}
        data-testid="secondary-button"
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </Secondary>
    )
  }

  if (thirdiary) {
    return (
      <Thirdiary
        className={className}
        data-testid="thirdiary-button"
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </Thirdiary>
    )
  }

  return (
    <Primary
      className={className}
      data-testid="primary-button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </Primary>
  )
}

Button.defaultProps = {
  className: null,
  disabled: false,
  onClick: null,
  secondary: null,
  thirdiary: null,
  type: null,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  thirdiary: PropTypes.bool,
  type: PropTypes.string,
}

export default Button
