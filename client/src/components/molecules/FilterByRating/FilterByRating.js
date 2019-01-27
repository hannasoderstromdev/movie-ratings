import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text, TextDark, TextPrimary } from 'components/atoms/Typography'
import Icon from 'components/atoms/Icon'
import Rating from 'components/molecules/Rating'

const Wrapper = styled.div`
  position: relative;
`

const Selected = styled.button`
  background-color: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  width: 14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  cursor: pointer;
`
const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-top: none;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 3rem;
  left: 0;
  z-index: 10;
  padding: 1rem 0 1.5rem;
  width: 14rem;
`

const Center = styled.div`
  text-align: center;
  font-style: italic;
`

const Option = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 0 1.5rem;
  margin: 2px 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.alertDark};
    cursor: pointer;
  }
`

class FilterByRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }

    this.selected = React.createRef()
  }

  componentDidMount() {
    this.timer = null
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  toggleOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  setFocus = () => {
    this.selected.current.focus()
  }

  openDropdown = () => {
    this.setState({ isOpen: true })
    clearTimeout(this.timer)
  }

  closeDropdown = () => {
    // https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element/3028037#3028037
    this.timer = setTimeout(() => this.setState({ isOpen: false }), 0)
  }

  render() {
    const { filterByRating } = this.props
    return (
      <Wrapper>
        <Selected
          data-testid="selected"
          onBlur={this.closeDropdown}
          onClick={this.toggleOpen}
          onFocus={this.setFocus}
          ref={this.selected}
        >
          <Text>Filter results...</Text>{' '}
          {this.state.isOpen ? (
            <Icon color="#F3F3F3" icon={['fas', 'chevron-up']} />
          ) : (
            <Icon color="#F3F3F3" icon={['fas', 'chevron-down']} />
          )}
        </Selected>
        {this.state.isOpen && (
          <Dropdown data-testid="dropdown">
            <Option
              data-testid="filter-none"
              onClick={() => filterByRating('none')}
              onFocus={this.openDropdown}
            >
              <TextPrimary>Show all ratings</TextPrimary>
            </Option>
            <Center>
              <TextDark>- or -</TextDark>
            </Center>
            <Option
              data-testid="filter-one"
              onClick={() => filterByRating('1')}
              onFocus={this.openDropdown}
            >
              <Rating rating={1} small />
            </Option>
            <Option
              data-testid="filter-two"
              onClick={() => filterByRating('2')}
              onFocus={this.openDropdown}
            >
              <Rating rating={2} small />
            </Option>
            <Option
              onClick={() => filterByRating('3')}
              onFocus={this.openDropdown}
            >
              <Rating rating={3} small />
            </Option>
            <Option
              onClick={() => filterByRating('4')}
              onFocus={this.openDropdown}
            >
              <Rating rating={4} small />
            </Option>
            <Option
              onClick={() => filterByRating('5')}
              onFocus={this.openDropdown}
            >
              <Rating rating={5} small />
            </Option>
          </Dropdown>
        )}
      </Wrapper>
    )
  }
}

FilterByRating.propTypes = {
  filterByRating: PropTypes.func.isRequired,
}

export default FilterByRating
