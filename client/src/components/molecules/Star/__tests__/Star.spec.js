import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Star from '..'

describe('Components/Star', () => {
  const onMouseOver = jest.fn()
  const onMouseOut = jest.fn()
  const onClick = jest.fn()
  const props = {
    onMouseOver,
    onMouseOut,
    onClick,
    isSelected: true,
  }
  const { getByTestId } = render(<Star {...props} />)
  it('renders', () => {
    expect(getByTestId('star').tagName).toBe('BUTTON')
  })

  it('handles click', () => {
    fireEvent.click(getByTestId('star'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('handles mouseOver', () => {
    fireEvent.mouseOver(getByTestId('star').children[0])
    expect(onMouseOver).toHaveBeenCalledTimes(1)
  })

  it('handles mouseOut', () => {
    fireEvent.mouseOut(getByTestId('star').children[0])
    expect(onMouseOut).toHaveBeenCalledTimes(1)
  })
})
