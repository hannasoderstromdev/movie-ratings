import userService from './user/user.service'

/**
 * Handles response from fetch
 * return Promise.reject on error
 * return data if ok
 */

const handleResponse = async response => {
  const text = await response.text()
  const data = await JSON.parse(text)
  if (!response.ok) {
    const error = (await data.message) || (await response.statusText)
    return Promise.reject(error)
  }
  return data
}
export default handleResponse
