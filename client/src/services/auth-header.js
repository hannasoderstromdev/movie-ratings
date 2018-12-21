export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'))
  return user && user.token
    ? {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      }
    : {}
}
