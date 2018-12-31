// import authHeader from '../auth-header'

import handleResponse from '../handle-response'

const getAll = async () => {
  const user = await JSON.parse(localStorage.getItem('user'))

  if (user) {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-access-token': user.token,
      },
    }

    const response = await fetch('/movies', requestOptions)
    return await handleResponse(response)
  }
}

const create = async movie => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user) {
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
    return await handleResponse(response)
  }
}

const update = async (movieId, newProps) => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user) {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-access-token': user.token,
      },
      body: JSON.stringify({ ...newProps }),
    }

    const response = await fetch(`/movies/${movieId}`, requestOptions)
    return await handleResponse(response)
  }
}

const moviesService = { getAll, create, update }

export default moviesService
