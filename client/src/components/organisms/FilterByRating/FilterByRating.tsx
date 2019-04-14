import React, { Component } from "react";
import styled from "styled-components";

import { TextDark, TextPrimary } from "components/atoms/Typography";
import Icon from "components/atoms/Icon";

import Rating from "components/molecules/Rating";

const Wrapper = styled.div`
  position: relative;
`;

const Selected = styled.button`
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  border: none;
  width: 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.text};

  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 2.9rem;
  left: 0;
  z-index: 10;
  padding: 1rem 0 1.5rem;
  width: 12.5rem;
`;

const Center = styled.div`
  text-align: center;
  font-style: italic;
`;

const Option = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 0 1.25rem;
  margin: 2px 0;
  border: none;
  display: block;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.alertDark};
    cursor: pointer;
  }
`;

type FilterByRatingProps = {
  filterByRating: (...args: any[]) => any
};

type FilterByRatingState = {
  isOpen: boolean
};

class FilterByRating extends Component<
  FilterByRatingProps,
  FilterByRatingState
> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.selected = React.createRef();
  }

  componentDidMount() {
    this.timer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  toggleOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  setFocus = () => {
    this.selected.current.focus();
  };

  openDropdown = () => {
    this.setState({ isOpen: true });
    clearTimeout(this.timer);
  };

  closeDropdown = () => {
    // https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element/3028037#3028037
    this.timer = setTimeout(() => this.setState({ isOpen: false }), 0);
  };

  onClick = value => {
    this.props.filterByRating(value);
    this.closeDropdown();
  };

  render() {
    return (
      <Wrapper>
        <Selected
          data-testid="selected"
          onBlur={this.closeDropdown}
          onClick={this.toggleOpen}
          onFocus={this.setFocus}
          ref={this.selected}
        >
          Filter by rating
          {this.state.isOpen ? (
            <Icon color="#F3F3F3" icon={["fas", "chevron-up"]} />
          ) : (
            <Icon color="#F3F3F3" icon={["fas", "chevron-down"]} />
          )}
        </Selected>
        {this.state.isOpen && (
          <Dropdown data-testid="dropdown">
            <Option
              data-testid="filter-none"
              onClick={() => this.onClick(0)}
              onFocus={this.openDropdown}
            >
              <TextPrimary>Show all ratings</TextPrimary>
            </Option>
            <Center>
              <TextDark>- or -</TextDark>
            </Center>
            <Option
              data-testid="filter-one"
              onClick={() => this.onClick(1)}
              onFocus={this.openDropdown}
            >
              <Rating rating={1} small />
            </Option>
            <Option
              data-testid="filter-two"
              onClick={() => this.onClick(2)}
              onFocus={this.openDropdown}
            >
              <Rating rating={2} small />
            </Option>
            <Option onClick={() => this.onClick(3)} onFocus={this.openDropdown}>
              <Rating rating={3} small />
            </Option>
            <Option onClick={() => this.onClick(4)} onFocus={this.openDropdown}>
              <Rating rating={4} small />
            </Option>
            <Option onClick={() => this.onClick(5)} onFocus={this.openDropdown}>
              <Rating rating={5} small />
            </Option>
          </Dropdown>
        )}
      </Wrapper>
    );
  }
}

export default FilterByRating;
