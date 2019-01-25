import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ToggleWrapper = styled.div`
  transition: 0.25s ease-in-out;
`

const ToggleCheckbox = styled.input`
  position: absolute;
  top: -5000px;
  height: 0;
  width: 0;
  opacity: 0;
  border: none;
  outline: none;

  &:checked + label:before {
    left: calc(100% - 36px);
  }

  &:checked + label:after {
    content: attr(data-on);
    left: 60px;
    width: 36px;
  }
`

const ToggleLabel = styled.label`
  display: block;
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  height: 36px;
  border-radius: 50%;
  background: #f8f8f8;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    line-height: 34px;
    text-indent: 40px;
    height: 36px;
    width: 36px;
    border-radius: 100%;
    top: 0;
    left: 0;
    right: auto;
    background: white;
  }

  &:after {
    content: attr(data-off);
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: -300px;
    padding: 10px;
    height: 100%;
    width: 300px;
    text-align: right;
    color: #bfbfbf;
    white-space: nowrap;
  }
`

const Toggle = ({ name, isActive }) => (
  <ToggleWrapper>
    <ToggleCheckbox
      checked={isActive}
      id="checkbox"
      name={name}
      type="checkbox"
    />
    <ToggleLabel data-off="off" data-on="on" for="checkbox" />
  </ToggleWrapper>
)

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default Toggle
