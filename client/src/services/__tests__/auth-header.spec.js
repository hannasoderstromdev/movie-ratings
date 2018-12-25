import authHeader from '../auth-header'

describe('Services/auth-header', () => {
  it('returns a valid authentication header', () => {
    localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
    const header = authHeader()
    expect(header).toEqual({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': 'fake token',
    })
    localStorage.clear()
  })

  it('handles user not in localstorage', () => {
    const header = authHeader()
    expect(header).toEqual({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  })
})
