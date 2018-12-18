import React from 'react'

import Label from 'components/atoms/Label'
import InputField from 'components/atoms/InputField'

const LabeledInputField = ({
  label,
  name,
  type,
  onChange,
  value,
  placeholder,
}) => (
  <Label htmlFor={name}>
    {label}
    <InputField
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </Label>
)

export default LabeledInputField
