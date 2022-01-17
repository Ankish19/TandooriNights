import axios from 'axios'
import { apiHeaders } from './service'

const apiUrl = 'https://tandoorinights.ca/rest/api/'
const storeSlug = 'tandoori-nights-6rvkykyawv4cyzr'

export const getMenu = () => {
  return axios.post(
    `${apiUrl}get-restaurant-items/${storeSlug}`
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
export const otp = (data) => {
  return axios.post(`${apiUrl}otp`, data)
}
export const otpverify = (data) => {
  return axios.post(`${apiUrl}otpverify`, data)
}

export const getGoogleApi = async () => {
  return await axios.get(`${apiUrl}get-setting/googleApiKey`).then(res => {
    return new Promise((resolve) => { resolve(res.data) })
  })
}
export const saveAddress = (data) => {
  return axios.post(`${apiUrl}save-address`, data, { headers: apiHeaders() })
}

export const setDefaultAddress = (data) => {
  return axios.post(`${apiUrl}set-default-address`, data, { headers: apiHeaders() })
}

export const getAddresses = (data) => {
  return axios.post(`${apiUrl}get-addresses`, data, { headers: apiHeaders() })
}

export const deleteAddress = (data) => {
  return axios.post(`${apiUrl}delete-address`, data, { headers: apiHeaders() })
}

export const getOrders = (data) => {
  return axios.post(`${apiUrl}get-orders`, data)
}

export const getSettings = (data) => {
  return axios.post(`${apiUrl}get-settings`, data)
}

export const getRestaurantInfo = () => {
  return axios.post(`${apiUrl}get-restaurant-info/${storeSlug}`)
}
