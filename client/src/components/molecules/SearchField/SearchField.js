import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/atoms/Icon'
import Label from 'components/atoms/Label'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchStyle = styled.input`
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1.4rem;
  flex: 1.9;
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

const SearchButton = styled.button`
  flex: 0.1;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.8rem;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  }
`

const LabelWithMargin = styled(Label)`
  margin-bottom: 1rem;
`

const InputWrapper = styled.div`
  display: flex;
`

const SearchField = ({ name, label, onBlur, onChange, placeholder }) => (
  <Wrapper>
    <LabelWithMargin>{label}</LabelWithMargin>
    <InputWrapper>
      <SearchStyle
        data-testid="searchfield"
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type="search"
      />
      <SearchButton type="submit">
        <Icon icon={['fas', 'search']} iconsize="18px" />
      </SearchButton>
    </InputWrapper>
  </Wrapper>
)

SearchField.defaultProps = {
  label: '',
  onBlur: null,
  placeholder: 'Search...',
}

SearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}
export default SearchField
