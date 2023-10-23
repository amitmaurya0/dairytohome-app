import deliveryTypes from "../configs/deliveryTypes"

export const deliveryType = (
  state = {
    deliveryType: deliveryTypes.SLOT.type
  },
  action,
) => {
  switch (action.type) {
    case 'SET_DELIVERY_TYPE':
      return (state = {
        ...state,
        deliveryType: action.payload
      })
      break

    default:
      return state
  }
}
