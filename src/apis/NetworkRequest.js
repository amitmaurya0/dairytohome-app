import http from './http'
import {
  EDIT_PROFILE,
} from './urls'






export const editProfile = async data => {
  
  // console.log(options)
  return http
    .post(EDIT_PROFILE, data)
    .then(res => {
      //  console.log(res)
      return checkAuth(res.data)
    })
    .catch(err => {
      //  console.log(err)
      return checkError(err)
    })
}