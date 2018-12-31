import fetchMock from 'fetch-mock'
import searchService from '../search.service'

describe('Services/Search', () => {
  fetchMock.config.overwriteRoutes = true

  describe('search', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
    })

    afterEach(() => {
      localStorage.clear()
    })

    it('handles successful request', async () => {
      const data = {}

      fetchMock.mock('/search/?movieTitle=test', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      })
      const response = await searchService.search('test')
      expect(response).toEqual({ data: {} })
    })

    it('handles failed request', async () => {
      localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))

      const data = {}

      fetchMock.mock('/search/?movieTitle=test', {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      })

      try {
        await searchService.search('test')
      } catch (error) {
        expect(error).toEqual(new Error({}))
      }
    })
  })
})
