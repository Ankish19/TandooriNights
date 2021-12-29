export const saveLocalStorage = (type, data) => {
  return localStorage.setItem(type, data)
}

export const getLocalStorage = (type) => {
  return JSON.parse(localStorage.getItem(type))
}

export const getAccessToken = (type) => {
  return JSON.parse(localStorage.getItem(type)).auth_token
}
