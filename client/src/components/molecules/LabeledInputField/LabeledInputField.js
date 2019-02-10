import React from 'react'
import PropTypes from 'prop-types'

import Label from 'components/atoms/Label'
import InputField from 'components/atoms/InputField'
import ErrorMessage from 'components/atoms/ErrorMessage'
import Icon from 'components/atoms/Icon'

const LabeledInputField = ({
  label,
  name,
  type,
  onBlur,
  onChange,
  value,
  placeholder,
  error,
}) => (
  <Label htmlFor={name}>
    {label}
    <InputField
      data-testid="input"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {error && (
      <ErrorMessage renderIcon={<Icon icon={['fa', 'exclamation-triangle']} />}>
        {error}
      </ErrorMessage>
    )}
  </Label>
)

LabeledInputField.defaultProps = {
  error: false,
  onBlur: null,
}

LabeledInputField.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default LabeledInputField
