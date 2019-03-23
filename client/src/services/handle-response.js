import userService from './user/user.service'

/**
 * Handles response from fetch
 * @return Promise.reject on error
 * @return data if ok
 */

const handleResponse = async response => {
  const text = await response.text()
  if (!response.ok) {
    // This only happens if token exists but is invalid, logout to clear the invalid token
    if (response.status === 403) {
      userService.logout()
    }

    const error = {
      message: response.statusText,
      status: response.status,
    }
    return Promise.reject(error)
  }

  return text && JSON.parse(text)
}
export default handleResponse
