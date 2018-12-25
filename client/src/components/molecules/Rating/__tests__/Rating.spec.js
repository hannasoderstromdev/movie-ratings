import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Rating from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Rating', () => {
  const setRating = jest.fn()
  const props = {
    setRating,
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

  it('handles setRating', () => {
    fireEvent.click(getByTestId('rating').children[1])
    expect(setRating).toHaveBeenCalledTimes(1)
    expect(setRating).toHaveBeenCalledWith(2)
  })
})
