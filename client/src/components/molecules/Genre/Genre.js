import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import genresActions from 'actions/genres/genres.actions'

import Icon from 'components/atoms/Icon'

const Button = styled.button`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.dark};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.textDark : theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.textSmall};
  outline: none;
  margin: 0 1rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 0.5rem;
  }
`

class Genre extends Component {
  toggleSelectedGenre = () => {
    const {
      addToGenreFilter,
      filter,
      id,
      name,
      removeGenreFromFilter,
    } = this.props
    if (filter[id]) {
      removeGenreFromFilter(id)
    } else {
      addToGenreFilter({ id, name })
    }
  }

  render() {
    const { name, filter, id } = this.props
    return (
      <Button onClick={this.toggleSelectedGenre} selected={filter[id]}>
        {name}
        {filter[id] ? (
          <Icon icon={['fas', 'minus']} testId="minus" />
        ) : (
          <Icon icon={['fas', 'plus']} testId="plus" />
        )}
      </Button>
    )
  }
}

const mapStateToProps = ({ genres }) => ({
  filter: genres.filter,
})

const mapDispatchToProps = {
  addToGenreFilter: genresActions.addToGenreFilter,
  removeGenreFromFilter: genresActions.removeGenreFromFilter,
}

Genre.propTypes = {
  addToGenreFilter: PropTypes.func.isRequired,
  filter: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeGenreFromFilter: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Genre)
