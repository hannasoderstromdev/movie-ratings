import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Star from '..'

describe('Components/Molecules/Star', () => {
  const onMouseOver = jest.fn()
  const onMouseOut = jest.fn()
  const onClick = jest.fn()
  const props = {
    onMouseOver,
    onMouseOut,
    onClick,
    isSelected: true,
  }

  it('renders', () => {
    const { getByTestId, debug } = render(<Star {...props} />)
    expect(getByTestId('star').tagName).toBe('BUTTON')
  })

  it('handles click', () => {
    const { getByTestId } = render(<Star {...props} />)
    fireEvent.click(getByTestId('star'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('handles mouseOver', () => {
    const { getByTestId } = render(<Star {...props} />)
    fireEvent.mouseOver(getByTestId('star').children[0])
    expect(onMouseOver).toHaveBeenCalledTimes(1)
  })

  it('handles mouseOut', () => {
    const { getByTestId } = render(<Star {...props} />)
    fireEvent.mouseOut(getByTestId('star').children[0])
    expect(onMouseOut).toHaveBeenCalledTimes(1)
  })
})
