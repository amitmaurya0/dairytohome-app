import { logoutUser } from "../database/UserData"

export const user = (
  state = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    image: '',
    token: '',
    isLoggedIn: false,

  },
  action,
) => {
  switch (action.type) {
    case 'USER_DETAIL':

      return (state = {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        mobile: action.payload.mobile,
        country_code: action.payload.country_code,
        country: action.payload.country,
        image: action.payload.image,
        token: action.payload.token,
        isLoggedIn: true,
      })
      break

    case 'REMOVE_USER':
      logoutUser();

      return (state = {
        ...state,
        id: '',
        name: '',
        email: '',
        mobile: '',
        image: '',
        token: '',
        isLoggedIn: false,
      })
      break

    default:
      return state
  }
}
