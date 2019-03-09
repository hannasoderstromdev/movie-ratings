import handleResponse from '../handle-response'
import headers from 'helpers/headers'

const getAll = async () => {
  const options = await headers('GET::AUTH')
  const response = await fetch('/genres/', options)
  return await handleResponse(response)
}

const genresService = {
  getAll,
}

export default genresService
