import React from 'react'
import { render } from 'react-testing-library'

import { H1, H2, Text, TextDark } from '..'
import Theme from '../../../Theme'

describe('<H1 />', () => {
  it('renders', () => {
    const { getByText } = render(
      <Theme>
        <H1>Title h1</H1>
      </Theme>,
    )
    expect(getByText('Title h1').tagName).toBe('H1')
  })
})

describe('<H2 />', () => {
  it('renders', () => {
    const { getByText } = render(
      <Theme>
        <H2>Title h2</H2>
      </Theme>,
    )
    expect(getByText('Title h2').tagName).toBe('H2')
  })
})

describe('<Text />', () => {
  it('renders', () => {
    const { getByText } = render(
      <Theme>
        <Text>Text</Text>
      </Theme>,
    )
    expect(getByText('Text').tagName).toBe('SPAN')
  })
})

describe('<TextDark />', () => {
  it('renders', () => {
    const { getByText } = render(
      <Theme>
        <TextDark>Text dark</TextDark>
      </Theme>,
    )
    expect(getByText('Text dark').tagName).toBe('SPAN')
  })
})
