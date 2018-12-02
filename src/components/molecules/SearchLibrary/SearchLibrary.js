import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
`
const SearchField = styled.input`
  height: 100%;
  flex: 1.9;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 2rem;
  font-size: 1.4rem;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
    opacity: 1;
  }
`
const SearchButton = styled.button`
  flex: 0.1;
`

const SearchLibrary = ({ name, onChange, placeholder }) => (
  <Wrapper>
    <SearchField
      type="search"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
    <SearchButton>Search</SearchButton>
  </Wrapper>
)

SearchLibrary.defaultProps = {
  placeholder: 'Search for...',
}

SearchLibrary.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default SearchLibrary
