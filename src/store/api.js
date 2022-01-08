import axios from 'axios'
import { apiHeaders } from './service'

const apiUrl = 'https://tandoorinights.ca/rest/api/'

export const getMenu = () => {
  return axios.post(
    `${apiUrl}get-restaurant-items/tandoori-nights-6rvkykyawv4cyzr`
  )
}

export const register = (data) => {
  return axios.post(`${apiUrl}register`, data, { headers: apiHeaders() })
}

export const verifyOtp = (data) => {
  return axios.post(`${apiUrl}verify-otp`, data, { headers: apiHeaders() })
}

export const login = (data) => {
  return axios.post(`${apiUrl}login`, data, { headers: apiHeaders() })
}
export const otp = (data) => {
  return axios.post(`${apiUrl}otp`, data, { headers: apiHeaders() })
}
export const otpverify = (data) => {
  return axios.post(`${apiUrl}otpverify`, data, { headers: apiHeaders() })
}

export const getGoogleApi = async () => {
  return await axios.get(`${apiUrl}get-setting/googleApiKey`).then(res => {
    return new Promise((resolve) => { resolve(res.data) })
  })
}
export const saveAddress = (data) => {
  return axios.post(`${apiUrl}save-address`, data, { headers: apiHeaders() })
}

export const getAddresses = (data) => {
  return axios.post(`${apiUrl}get-addresses`, data, { headers: apiHeaders() })
}

export const deleteAddress = (data) => {
  return axios.post(`${apiUrl}delete-address`, data, { headers: apiHeaders() })
}

export const getOrders = (data) => {
  return axios.post(`${apiUrl}get-orders`, data, { headers: apiHeaders() })
}
