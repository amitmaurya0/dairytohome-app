import React from 'react'
import { ItemContainer, RowContainer } from './styled'
import { Divider, Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import AddToCartButton from '../AddToCartButtons';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../actions/CartAction';
import colors from '../../configs/colors';
import { View } from 'react-native';
import { discountAvailable, getDisplayPrice } from '../../configs/helper';

const CheckoutProduct = ({ product, last }) => {
    const { productId, productVariantId, productName, productVariant, price, sellingPrice, quantity } = product;
    const isDiscounted = discountAvailable(price, sellingPrice);
    const displayPrice = getDisplayPrice(price, sellingPrice);
  
    // const inCart = cart.findIndex(item => item.productVariantId == selectedVariant.id)
    // const { quantity } = cart[inCart] ? cart[inCart] : {};
    return (
        <View>

            <RowContainer style={{justifyContent:'space-between'}}>
                <View>
                    <Text fontFamily={fonts.bold}>{productName}<Text> X {quantity}</Text></Text>
                    <Spacer space={5} />
                    <Text fontFamily={fonts.medium} size={14}>{productVariant}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'baseline' }}>
                    {isDiscounted && <Text size={14} style={isDiscounted ? { textDecorationLine: 'line-through' } : {}}>{'\u20B9'} {price}</Text>}
                    <Spacer space={'0'} width={'5'} />
                    <Text size={18} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {displayPrice}</Text>
                </View>
            </RowContainer>
            {
                !last && <Divider style={{ marginTop: 10, marginBottom: 5 }} />
            }
        </View>

           
       
  )
}

export default CheckoutProduct