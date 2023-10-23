import React from 'react'
import { ItemContainer, RowContainer } from './styled'
import { Divider, Spacer, Text } from '../styles'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'


const PriceInfo = ({ cart }) => {
  return (
    <ItemContainer>
        <RowContainer>
            <Text fontFamily={fonts.medium}>Subtotal</Text>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.price}</Text>
        </RowContainer>
        {
            cart.deliveryDiscount > 0 ?
            <>
            <Spacer />
            <RowContainer>
                <Text fontFamily={fonts.medium}>Delivery Discount</Text>
                <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.deliveryDiscount}</Text>
            </RowContainer>
            </> : null
        }
            <Spacer />
            <RowContainer>
            <Text fontFamily={fonts.medium}>Discount</Text>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>- {'\u20B9'} {cart.discount}</Text>
        </RowContainer>
            
        {
            cart.deliveryCharge > 0 ?
            <>
                <Spacer />
                <RowContainer>
                    <Text fontFamily={fonts.medium}>Delivery Charge</Text>
                    <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.deliveryCharge}</Text>
                </RowContainer> 
            
            </>: null
        }
        <Spacer />
        <Divider />
        <Spacer />
        <RowContainer>
            <Text fontFamily={fonts.medium}>Total</Text>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {cart.totalPrice}</Text>
        </RowContainer>
    </ItemContainer>
  )
}



export default PriceInfo