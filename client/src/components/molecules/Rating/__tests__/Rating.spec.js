import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Rating from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Rating', () => {
  const setRating = jest.fn()
  const onMouseOver = jest.fn()
  const onMouseOut = jest.fn()
  let props
  let utils

  beforeEach(() => {
    props = {
      setRating,
      onMouseOver,
      onMouseOut,
      rating: 1,
      useLock: true,
    }
    utils = render(
      <Theme>
        <Rating {...props} />
      </Theme>,
    )
  })

  it('renders', () => {
    expect(utils.getByTestId('rating').children.length).toBe(6) // 5 without lock
  })

  it('handles useLock and setRating', () => {
    fireEvent.click(utils.getByTestId('rating').children[0]) // unlock
    fireEvent.click(utils.getByTestId('rating').children[1])
    expect(setRating).toHaveBeenCalledTimes(1)
    expect(setRating).toHaveBeenCalledWith(1)
  })
})
