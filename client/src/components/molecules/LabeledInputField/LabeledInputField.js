import React from 'react'

import Label from 'components/atoms/Label'
import InputField from 'components/atoms/InputField'
import ErrorMessage from 'components/atoms/ErrorMessage'
import Icon from 'components/atoms/Icon'

const LabeledInputField = ({
  label,
  name,
  type,
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
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
    {
      <ErrorMessage renderIcon={<Icon icon={['fa', 'exclamation-triangle']} />}>
        {error}
      </ErrorMessage>
    }
  </Label>
)

export default LabeledInputField
