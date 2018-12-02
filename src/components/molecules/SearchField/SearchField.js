import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const SearchStyle = styled.input`
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  padding: 0 2rem;
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

const SearchField = ({ name, onChange, placeholder }) => (
  <Wrapper>
    <SearchStyle
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="search"
    />
    <SearchButton>Search</SearchButton>
  </Wrapper>
)

SearchField.defaultProps = {
  placeholder: 'Search...',
}

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
}
export default SearchField
