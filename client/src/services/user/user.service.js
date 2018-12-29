import handleResponse from '../handle-response'

const login = async (username, password) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password }),
    }

    const response = await fetch(`/users/authenticate`, requestOptions)
    const { data } = await handleResponse(response)

    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
    }

    return data.user
  } catch (error) {
    return error
  }
}

const logout = () => {
  localStorage.removeItem('user')
}

const userService = { login, logout }

export default userService
