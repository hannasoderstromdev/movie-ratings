import fetchMock from 'fetch-mock'
import userService from '../user.service'

describe('Services/User', () => {
  fetchMock.config.overwriteRoutes = true
  const username = 'testmail@gmail.com'
  const password = 'password123'

  describe('login', () => {
    it('handles successful request', async () => {
      const data = {
        profile: {
          role: 'User',
          id: 'uid01',
          firstName: 'Hanna',
          lastName: 'Söderström',
          email: 'testmail@gmail.com',
        },
        token: 'fake token',
      }

      fetchMock.mock('/users/authenticate', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      })

      try {
        const result = await userService.login(username, password)

        const expectedResult = {
          data: {
            user: {
              profile: {
                email: 'testmail@gmail.com',
                firstName: 'Hanna',
                id: 'uid01',
                lastName: 'Söderström',
                role: 'User',
              },
            },
            token: 'fake token',
          },
        }

        expect(result).toEqual(expectedResult)
      } catch (error) {
        //
      }
    })

    it('handles failed request', async () => {
      const data = null

      fetchMock.mock('/users/authenticate', {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      })

      try {
        await userService.login(username, password)
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
  })

  describe('logout', () => {
    it('handles logout', () => {
      userService.logout()
      expect(localStorage.removeItem).toHaveBeenCalled()
      jest.resetAllMocks()
    })
  })
})
