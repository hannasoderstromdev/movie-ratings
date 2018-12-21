import authHeader from '../auth-header'

import handleResponse from '../handle-response'

const getAll = async () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  const response = await fetch('/movies', requestOptions)
  const data = await handleResponse(response)

  console.log('getAll', data)

  return data
}

const create = async movie => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify({ ...movie }),
  }

  const response = await fetch('/movies', requestOptions)
  const data = await handleResponse(response)

  console.log('create', data)

  return data
}

const moviesService = { getAll, create }

export default moviesService
