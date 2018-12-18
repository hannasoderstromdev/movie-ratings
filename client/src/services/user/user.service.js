import config from 'config'
import { authHeader } from '../../helpers/auth-header'

const login = async (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  const response = await fetch(`${process.env.API_URL}/users/authenticate`, requestOptions)

  await handleResponse(response)
  
  const data = await response.json()

  if (data.user.token) {
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  return data.user
}

const logout = () => {
  localStorage.removeItem('user')
}

const handleResponse = async response => {
  const text = await response.text()
  const data = await JSON.parse(text)
  if (!response.ok) {
    if (response.status === 401) {
      logout()
    }

    const error = await data.message || await response.statusText
    return Promise.reject(error)
  }
  return data
}

export { login, logout }
