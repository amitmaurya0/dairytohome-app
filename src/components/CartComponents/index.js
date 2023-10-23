import React, { useState } from 'react'
import { ItemContainer, PriceCartContainer, RowContainer } from './styled'
import CartProductItem from './CartProductItem'
import { Divider, Spacer, Text } from '../styles'
import fonts from '../../configs/fonts'
import colors from '../../configs/colors'
import { CART_TYPES } from '../../configs'
import { cartUpdate } from '../../apis/order'
import { showSnackBarOne } from '../showSnackBarOne'
import { add_to_cart, remove_from_cart } from '../../actions/CartAction'
import { useDispatch } from 'react-redux'

const CartDetails = ({ cart, onAction }) => {

  



  return (
    <>
         {
          cart && 
          cart.products && 
          cart.products.map(item=> <CartProductItem 
            key={item.id}
            product={item} 
            addToCartPress={() => onAction(CART_TYPES.ADD, item.productId, item.productVariantId)}
            removeFromCartPress={() => onAction(CART_TYPES.REMOVE, item.productId, item.productVariantId)}
            />) 
        }
        <ItemContainer>
            <RowContainer>
                <Text size={14} fontFamily={fonts.medium}>Subtotal</Text>
                <Text size={14} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.price}</Text>
            </RowContainer>
           
            {
                cart.deliveryDiscount > 0 ?
                <>
                <Spacer />
                <RowContainer>
                    <Text size={14} fontFamily={fonts.medium}>Delivery Discount</Text>
                    <Text size={14} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.deliveryDiscount}</Text>
                </RowContainer>
                </> : null
            }
             <Spacer />
             <RowContainer>
                <Text size={14} fontFamily={fonts.medium}>Discount</Text>
                <Text size={14} color={colors.mainColor} fontFamily={fonts.bold}>- {'\u20B9'} {cart.discount}</Text>
            </RowContainer>
             
            {
                cart.deliveryCharge > 0 ?
                <>
                 <Spacer />
                    <RowContainer>
                        <Text size={14} fontFamily={fonts.medium}>Delivery Charge</Text>
                        <Text size={14} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.deliveryCharge}</Text>
                    </RowContainer> 
               
                </>: null
            }
            <Spacer />
            <Divider />
            <Spacer />
            <RowContainer>
                <Text size={14} fontFamily={fonts.medium}>Total</Text>
                <Text size={14} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.totalPrice}</Text>
            </RowContainer>
        </ItemContainer>
    </>
  )
}

export default CartDetails