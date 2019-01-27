import Normalize from '../Normalize'

describe('Components/Normalize', () => {
  it('renders', () => {
    expect(Normalize.globalStyle.rules).toMatchSnapshot()
  })
})
