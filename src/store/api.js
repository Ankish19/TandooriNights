import axios from 'axios'

const apiUrl = 'https://tandoorinights.ca/rest/api/'

export const getMenu = () => {
  return axios.post(
    `${apiUrl}get-restaurant-items/tandoori-nights-6rvkykyawv4cyzr`
  )
}

export const register = (data) => {
  return axios.post(`${apiUrl}register`, data)
}
export const login = (data) => {
  return axios.post(`${apiUrl}login`, data)
}
