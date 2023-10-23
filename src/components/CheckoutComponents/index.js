import React from 'react'
import { ItemContainer, PriceCartContainer, RowContainer } from './styled'
import CheckoutProduct from './CheckoutProduct'
import PriceInfo from './PriceInfo'
import { Divider, Spacer, Text } from '../styles'
import fonts from '../../configs/fonts'
import colors from '../../configs/colors'

const CheckoutDetails = ({ cart }) => {
  return (
    <>
        <ItemContainer>

            {
                cart && 
                cart.products && 
                cart.products.map((item, index)=> <CheckoutProduct key={item.productVariantId} last={cart.products.length == index+1} product={item} />) 
            }
        </ItemContainer>
        <PriceInfo cart={cart} />
    </>
  )
}

export default CheckoutDetails