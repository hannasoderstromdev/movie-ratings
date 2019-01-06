/**
 * headers
 *
 * This is a helper function that creates
 * valid headers for fetch-requests. It takes
 * in the type of header to create and data
 * when needed.
 *
 * If authentication token is required, it is
 * fetched from localStorage.
 */

export default async function headers(type, data = null) {
  const user = await JSON.parse(localStorage.getItem('user'))

  switch (type) {
    case 'GET::AUTH':
      return {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-access-token': user.token,
        },
      }

    case 'POST::AUTH':
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token': user.token,
        },
        body: JSON.stringify({ ...data }),
      }

    case 'PUT::AUTH':
      return {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token': user.token,
        },
        body: JSON.stringify({ ...data }),
      }

    case 'DELETE::AUTH':
      return {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token': user.token,
        },
      }

    default:
      return {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
  }
}
