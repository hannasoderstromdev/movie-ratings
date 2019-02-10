import handleResponse from '../handle-response'
import headers from 'helpers/headers'

const searchByTitle = async movieTitle => {
  const options = await headers('GET::AUTH')
  const response = await fetch(`/search/?movieTitle=${movieTitle}`, options)
  return await handleResponse(response)
}

const searchById = async imdbId => {
  const options = await headers('GET::AUTH')
  const response = await fetch(`/search/?imdbId=${imdbId}`, options)
  return await handleResponse(response)
}

const searchService = { searchByTitle, searchById }

export default searchService
