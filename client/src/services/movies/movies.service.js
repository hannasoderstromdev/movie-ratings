import authHeader from '../auth-header'

import handleResponse from '../handle-response'

const getAll = async () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  const response = await fetch(`${process.env.API_URL}/movies`, requestOptions)
  handleResponse(response)

  return response
}

const moviesService = { getAll }

export default moviesService
