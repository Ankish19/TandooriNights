import axios from 'axios'
import { apiHeaders } from './service'

const apiUrl = 'https://tandoorinights.ca/rest/api/'
const storeSlug = 'tandoori-nights-6rvkykyawv4cyzr'
const storeID = '2'

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

export const resendVerifyOtp = (data) => {
  return axios.post(`${apiUrl}resend_verify_otp`, data)
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

export const getUpdateInfo = () => {
  var data = ''
  return axios.post(`${apiUrl}update-user-info`, data, { headers: apiHeaders() })
}

export const deleteAddress = (data) => {
  return axios.post(`${apiUrl}delete-address`, data, { headers: apiHeaders() })
}

export const getOrders = (data) => {
  return axios.post(`${apiUrl}get-orders`, data, { headers: apiHeaders() })
}

export const getSettings = (data) => {
  return axios.post(`${apiUrl}get-settings`, data)
}

export const getRestaurantInfo = () => {
  return axios.post(`${apiUrl}get-restaurant-info/${storeSlug}`)
}

export const placeOrder = (data) => {
  return axios.post(`${apiUrl}place-order`, data, { headers: apiHeaders() })
}

export const getOrderDetail = (data) => {
  return axios.post(`${apiUrl}get-order-detail`, data, { headers: apiHeaders() })
}

export const checkCoupon = (data) => {
  var datanew = {
    coupon: data.coupon,
    restaurant_id: storeID,
    subtotal: data.subTotal
  }
  return axios.post(`${apiUrl}apply-coupon`, datanew, { headers: apiHeaders() })
}

// -------------Payment api

export const CardToken = (data) => {
  return axios.post('https://api.clover.com/invoicingcheckoutservice/v1/checkouts', data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer 63d11ca9-a29d-32b9-0972-3df192f945d0',
      'X-Clover-Merchant-ID': 'K35XECMJWJYW1'
    }
  })
}
