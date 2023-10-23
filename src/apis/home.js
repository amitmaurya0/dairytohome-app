import http, { checkError } from './http'
import {
  HOME_SCREEN, PRODUCTS,
} from './urls'






export const getHomeProducts = async data => {
  
  console.log(HOME_SCREEN)
  return http.get(HOME_SCREEN)
    .then(res => {
      return res.data;
      // return checkAuth(res.data)
    })
    .catch(err => {
      //  console.log(err)
      return checkError(err)
    })
}

export const getProductDetails = async id => {
  
  
  return http.get(`${PRODUCTS}/${id}`)
    .then(res => {
      return res.data;
      // return checkAuth(res.data)
    })
    .catch(err => {
      //  console.log(err)
      return checkError(err)
    })
}

export const getApartments = async _ => {
  
  
  return http.get(`${HOME_SCREEN}/apartments`)
    .then(res => {
      return res.data;
      // return checkAuth(res.data)
    })
    .catch(err => {
      //  console.log(err)
      return checkError(err)
    })
}