import http, { checkAuth, checkError } from './http'
import {
  MY_PROFILE, LOGOUT_URL, ALL_ADDRESSES,
} from './urls'






export const addAddress = async data => {
  
  return http
    .post(ALL_ADDRESSES+`/${data.id}`, data)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}
export const deleteAddress = async addressId => {
  
  return http
    .delete(ALL_ADDRESSES+`/${addressId}`)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}

export const getAddresses = async data => {
  
  return http
    .get(ALL_ADDRESSES, data)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}

export const editProfile = async data => {
  
  return http
    .post(MY_PROFILE, data)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}
export const logoutUser = async data => {
  
  return http
    .post(LOGOUT_URL, data)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}