// import { authHeader } from '../../helpers/auth-header'
import handleResponse from '../handle-response'

const login = async (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: username, password }),
  }

  try {
    const response = await fetch(`/users/authenticate`, requestOptions)

    const { data } = await handleResponse(response)

    console.log('data', data)

    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
    }

    return data.user
  } catch (error) {
    throw new Error(error)
  }
}

const logout = () => {
  localStorage.removeItem('user')
}

const userService = { login, logout }

export default userService
