
export const location = (
  state = {
    latitude: 25.5346,
    longitude: 81.8722
  },
  action,
) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return (state = {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      })
      break

    default:
      return state
  }
}
