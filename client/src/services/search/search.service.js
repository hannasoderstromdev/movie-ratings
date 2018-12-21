import handleResponse from '../handle-response'

const search = async movieTitle => {
  const user = JSON.parse(localStorage.getItem('user'))

  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'x-access-token': user.token,
    },
  }

  const response = await fetch(
    `/search/?movieTitle=${movieTitle}`,
    requestOptions,
  )

  const data = await handleResponse(response)

  return data
}

const searchService = { search }

export default searchService
