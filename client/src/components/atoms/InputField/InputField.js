import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyle = styled.input`
  height: 3.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.4rem;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
  }

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  }
`

const InputField = ({ name, type, placeholder, value, onChange }) => (
  <InputStyle
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

InputField.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => console.log('onChange handler missing'),
}

InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputField
