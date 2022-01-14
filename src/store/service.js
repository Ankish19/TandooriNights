export const saveLocalStorage = (type, data) => {
  return localStorage.setItem(type, data)
}

export const getLocalStorage = (type) => {
  return JSON.parse(localStorage.getItem(type))
}

export const getAccessToken = (type) => {
  return JSON.parse(localStorage.getItem(type)).auth_token
}

export const apiHeaders = () => {
  const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RhbmRvb3JpbmlnaHRzLmNhL3Jlc3QvYXBpL2xvZ2luIiwiaWF0IjoxNjQxNTI4NDQxLCJuYmYiOjE2NDE1Mjg0NDEsImp0aSI6Im05S0g3UWZwcmdFcU5hcGEiLCJzdWIiOjExLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.SV-53aO9gKN9MgvyQkOJBUi0ij8tIh7m5JACt_zhH2I'
  const headers = {
    Authorization: `Bearer ${key}`
  }
  return headers
}

export const addCart = (type, data) => {
  return localStorage.setItem(type, data)
}

export const tipTax = (type, data) => {
  console.log(data)
  return localStorage.setItem(type, data)
}
