import fetchMock from 'fetch-mock'
import handleResponse from '../handle-response'

fetchMock.config.overwriteRoutes = true

describe('Services/handle-response', () => {
  it('handles valid response', async () => {
    fetchMock.mock('/fake', {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'success',
        message: 'success',
        data: 'fake',
      }),
    })
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch('/fake', options)
    handleResponse(response)
  })

  it('handles failed response', async () => {
    try {
      fetchMock.mock('/fake', {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'error',
          message: 'Server error',
          data: null,
        }),
      })
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch('/fake', options)
      await handleResponse(response)
    } catch (error) {
      expect(error).toEqual({ message: 'Internal Server Error', status: 500 })
    }
  })
})
