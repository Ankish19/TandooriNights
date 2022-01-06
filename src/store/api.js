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

export const verifyOtp = (data) => {
  return axios.post(`${apiUrl}verify-otp`, data)
}

export const login = (data) => {
  return axios.post(`${apiUrl}login`, data)
}

export const getGoogleApi = async () => {
  return await axios.get(`${apiUrl}get-setting/googleApiKey`).then(res => {
    return new Promise((resolve) => { resolve(res.data) })
  })
}

export const getAddresses = (data) => {
  return axios.post(`${apiUrl}get-addresses`, data)
}

export const deleteAddress = (addressId) => {
  return axios.post(`${apiUrl}delete-address/${addressId}/`)
}

export const getOrders = (data) => {
  return axios.post(`${apiUrl}get-orders`, data)
}
