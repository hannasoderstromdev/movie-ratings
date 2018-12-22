import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Rating from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Rating', () => {
  const increase = jest.fn()
  const decrease = jest.fn()
  const props = {
    increase,
    decrease,
    rating: 1,
  }
  const { getByTestId } = render(
    <Theme>
      <Rating {...props} />
    </Theme>,
  )
  it('renders', () => {
    expect(getByTestId('rating').children.length).toBe(5)
  })

  it('handles decrease', () => {
    fireEvent.click(getByTestId('rating').children[0])
    expect(decrease).toHaveBeenCalledTimes(1)
  })

  it('handles increase', () => {
    fireEvent.click(getByTestId('rating').children[1])
    expect(increase).toHaveBeenCalledTimes(1)
  })
})
