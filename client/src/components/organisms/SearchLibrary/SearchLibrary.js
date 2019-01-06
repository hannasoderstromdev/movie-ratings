import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import moviesThunks from 'actions/movies/movies.thunks'

import Icon from 'components/atoms/Icon'

const Wrapper = styled.form`
  width: 100%;
  height: 7vh;
  display: flex;
  position: relative;
`
const SearchLibraryField = styled.input`
  height: 100%;
  flex: 1.9;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 2rem;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-style: italic;
  color: ${({ theme }) => theme.colors.textPrimary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
    opacity: 1;
  }
`
const SearchButton = styled.button`
  flex: 0.1;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  &:focus {
    border: 1px solid transparent;
  }
`

class SearchLibrary extends React.Component {
  state = {
    title: '',
  }

  doOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  doOnSubmit = e => {
    e.preventDefault()
    this.props.findMovieByTitle(this.state.title)
  }

  render() {
    return (
      <Wrapper onSubmit={this.doOnSubmit} data-testid="wrapper">
        <SearchLibraryField
          data-testid="search-field"
          name="title"
          type="search"
          value={this.state.title}
          onChange={this.doOnChange}
          placeholder="Search library..."
        />
        <SearchButton type="submit" data-testid="search-button">
          <Icon icon={['fas', 'search']} iconsize="16px" />
        </SearchButton>
      </Wrapper>
    )
  }
}

SearchLibrary.defaultProps = {}

SearchLibrary.propTypes = {}

const mapStateToProps = ({ movies }) => ({
  movies,
})

const mapDispatchToProps = {
  findMovieByTitle: moviesThunks.findMovieByTitle,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchLibrary)
