import React from 'react'
import { ItemContainer, RowContainer } from './styled'
import { BGOverlvay, Divider, Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import AddToCartButton from '../AddToCartButtons';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../actions/CartAction';
import colors from '../../configs/colors';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import SmallCartButton from '../CartButton';
import { CartContainer, CartIcons, ImageContainerLeft, ImageContainerRight } from '../CartButton/styled';
import { MINUS_ICON, PLUS_ICON } from '../../configs/images';
import { CART_TYPES } from '../../configs';

const CartProductItem = ({ processing, product, removeFromCartPress, addToCartPress }) => {
    const { productId, productVariantId, productName, productVariant, price, sellingPrice, quantity } = product;
    const isDiscounted = sellingPrice > 0 && sellingPrice < price ? true: false;
    const displayPrice = sellingPrice > 0 && sellingPrice < price ? sellingPrice : price
    
  
    return (
        <ItemContainer>
             
            <Text fontFamily={fonts.bold}>{productName}</Text>
            <Text size={14}>{productVariant}</Text>
            <Spacer />
            <Divider />
            <Spacer />
            <RowContainer>
                <View style={{flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text size={18} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {displayPrice}</Text>
                    <Spacer space={'0'} width={'5'} />
                    {isDiscounted && <Text size={12} style={isDiscounted ? { textDecorationLine: 'line-through' } : {}}>{'\u20B9'} {price}</Text>}
                </View>

                <CartContainer>

                    <TouchableOpacity onPress={removeFromCartPress}>
                        <ImageContainerLeft>
                            <CartIcons source={MINUS_ICON} tintColor={colors.mainColor} />
                        </ImageContainerLeft>
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity onPress={addToCartPress}>
                        <ImageContainerRight>
                            <CartIcons source={PLUS_ICON} tintColor={colors.mainColor} />
                        </ImageContainerRight>
                    </TouchableOpacity>
               </CartContainer>
            </RowContainer>
        </ItemContainer>
  )
}

export default CartProductItem