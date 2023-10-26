import http, { checkAuth, checkError } from './http'
import {
  ALL_ORDERS,
  CART_PRODUCT,
} from './urls'


export const cartUpdate = async data => {
  
  // console.log(options)
  return http
    .post(CART_PRODUCT, data)
    .then(res => {
       console.log('===>',res)
      return checkAuth(res.data)
    })
    .catch(err => {
       console.log('ERROR===>',err)
      return checkError(err)
    })
}

export const getCartProducts = async data => {
  
  // console.log(options)
  return http
    .get(CART_PRODUCT)
    .then(res => {
       console.log('===>',res)
      return checkAuth(res.data)
    })
    .catch(err => {
       console.log('ERROR===>',err)
      return checkError(err)
    })
}





export const placeOrder = async data => {
  
  // console.log(options)
  return http
    .post(ALL_ORDERS, data)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}
export const sendConfirmPayment = async data => {
  
  // console.log(options)
  return http
    .post(ALL_ORDERS+'/payment', data)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}


export const getOrders = async (orderId='') => {
  
  console.log('========>', ALL_ORDERS+'/'+orderId);
  return http
    .get(ALL_ORDERS+'/'+orderId)
    .then(res => {
      
      return checkAuth(res.data)
    })
    .catch(err => {
       console.log('ERROR===>',err)
      return checkError(err)
    })
}

export const cancelOrder = async (orderId='') => {
  
  const url = `${ALL_ORDERS}/${orderId}/cancel`;
  return http.post(url)
    .then(res => {
      return checkAuth(res.data)
    })
    .catch(err => {
      return checkError(err)
    })
}