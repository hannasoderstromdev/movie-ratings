import React from 'react'
import Label from 'components/atoms/Label'
import InputField from 'components/atoms/InputField'
import ErrorMessage from 'components/atoms/ErrorMessage'
import Icon from 'components/atoms/Icon'

interface LabeledInputFieldProps {
  error?: boolean;
  label: string;
  name: string;
  onBlur?: () => void;
  onChange: () => void;
  placeholder: string;
  type: string;
  value: string;
}

const LabeledInputField: React.SFC<LabeledInputFieldProps> = ({
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

export default LabeledInputField
