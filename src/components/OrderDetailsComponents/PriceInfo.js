import React from 'react'
import { ItemContainer, RowContainer } from './styled'
import { Divider, Spacer, Text } from '../styles'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'


const PriceInfo = ({ order }) => {
  return (
    <>
        <Spacer />
        <Divider />
        <Spacer />
        <RowContainer>
            <Text fontFamily={fonts.medium}>Subtotal</Text>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {order.price}</Text>
        </RowContainer>
        {
            order.deliveryDiscount > 0 ?
            <>
            <Spacer />
            <RowContainer>
                <Text fontFamily={fonts.medium}>Delivery Discount</Text>
                <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {order.deliveryDiscount}</Text>
            </RowContainer>
            </> : null
        }
            <Spacer />
            <RowContainer>
            <Text fontFamily={fonts.medium}>Discount</Text>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>- {'\u20B9'} {order.totalDiscount}</Text>
        </RowContainer>
            
        {
            order.deliveryCharge > 0 ?
            <>
                <Spacer />
                <RowContainer>
                    <Text fontFamily={fonts.medium}>Delivery Charge</Text>
                    <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {order.deliveryCharge}</Text>
                </RowContainer> 
            
            </>: null
        }
        <Spacer />
        <Divider />
        <Spacer />
        <RowContainer>
            <Text fontFamily={fonts.medium}>Total</Text>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {order.totalPrice}</Text>
        </RowContainer>
    </>
  )
}



export default PriceInfo