import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Rating from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Rating', () => {
  const setRating = jest.fn()
  let props

  afterEach(cleanup)

  it('renders', () => {
    props = {
      setRating,
      rating: 1,
      useLock: false,
    }
    const { getByTestId } = render(
      <Theme>
        <Rating {...props} />
      </Theme>,
    )
    expect(getByTestId('rating').children.length).toBe(5)
  })

  it('handles useLock', () => {
    props = {
      setRating,
      rating: 1,
      useLock: true,
    }
    const { getByTestId } = render(
      <Theme>
        <Rating {...props} />
      </Theme>,
    )
    fireEvent.click(getByTestId('rating').children[1])
    expect(setRating).not.toHaveBeenCalled()
  })

  it('handles setRating', () => {
    props = {
      setRating,
      rating: 1,
      useLock: false,
    }
    const { getByTestId } = render(
      <Theme>
        <Rating {...props} />
      </Theme>,
    )
    fireEvent.click(getByTestId('rating').children[1])
    expect(setRating).toHaveBeenCalledTimes(1)
    expect(setRating).toHaveBeenCalledWith(2)
  })
})
