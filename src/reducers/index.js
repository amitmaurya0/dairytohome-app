import { combineReducers } from "redux";
import {user} from './UserReducer'
import {deliveryType} from './DeliveryTypeReducer'
import {cart} from './CartReducer'
import {location} from './LocationReducer'




export const reducers = combineReducers({
    user,
    deliveryType,
    cart,
    location
})