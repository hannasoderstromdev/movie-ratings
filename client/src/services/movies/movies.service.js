// import authHeader from '../auth-header'

import handleResponse from '../handle-response'

const getAll = async () => {
  const user = await JSON.parse(localStorage.getItem('user'))

  if (user) {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-access-token': user.token,
        },
      }

      const response = await fetch('/movies', requestOptions)
      const { data } = await handleResponse(response)

      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}

const create = async movie => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-access-token': user.token,
      },
      body: JSON.stringify({ ...movie }),
    }

    const response = await fetch('/movies/create', requestOptions)
    const data = await handleResponse(response)
    return data
  } catch (error) {
    return error
  }
}

const moviesService = { getAll, create }

export default moviesService
