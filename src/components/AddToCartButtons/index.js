import React from 'react'
import { ADD_TO_CART, MINUS_ICON, PLUS_ICON, REMOVE_FROM_CART } from '../../configs/images'
import { Text } from '../styles'
import { CartContainer, CartIcons, ImageContainerRight, ImageContainerLeft } from './styled'
import { TouchableOpacity } from 'react-native'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'
const AddToCartButton = ({ qty, addToCart , removeFromCart}) => {
  return (
    <CartContainer>
        <TouchableOpacity onPress={removeFromCart}>
          <ImageContainerLeft>
            <CartIcons source={MINUS_ICON} tintColor={colors.white} />
          </ImageContainerLeft>
        </TouchableOpacity>
        <Text fontFamily={fonts.medium} size={18}>{qty}</Text>
        <TouchableOpacity onPress={addToCart}>
          <ImageContainerRight>
            <CartIcons source={PLUS_ICON} />
          </ImageContainerRight>
        </TouchableOpacity>
    </CartContainer>
  )
}

export default AddToCartButton