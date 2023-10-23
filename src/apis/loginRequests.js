import axios from "axios"
import { USER_LOGIN, USER_LOGIN_VERIFY } from "./urls"
import { checkError } from "./http"

export const mobileLogin = async (mobile, name, isLogin, otp=undefined) => {

    const data = {
      phone:mobile,
      name,
      isLogin,
      otp
    }
    const url = otp ? `${USER_LOGIN_VERIFY}?isRegister=${isLogin ? 0 : 1}` : USER_LOGIN
    return axios.post(url, data)
      .then(res => {
        console.log('res', res)
        return res.data;
      })
      .catch(err => {
        console.log(err)
        return checkError(err)
      })
}
