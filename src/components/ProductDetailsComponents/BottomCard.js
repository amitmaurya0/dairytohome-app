import React, { useReducer, useState } from 'react'
import { PriceContainer, FloatingContainer, CartButton, PriceText } from './styled'
import { BGOverlvay, Spacer, Text } from '../styles';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';
import { PLUS_ICON } from '../../configs/images';
import { ActivityIndicator, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../actions/CartAction';
import AddToCartButton from '../AddToCartButtons';
import { CART_TYPES } from '../../configs';
import { showSnackBarOne } from '../showSnackBarOne';
import strings from '../../configs/strings';
import { cartUpdate } from '../../apis/order';
import { getDisplayPrice } from '../../configs/helper';

const BottomCard = ({ selectedVariant }) => {
    const { id, productId, price, discountPercentage, sellingPrice } = selectedVariant;
    const isDiscounted = discountPercentage > 0;
    const { cart=[] } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [processing, setProcessing] = useState(false);


    const manageCart = async (type) => {
        try {
            setProcessing(true);
            const data = { productId: productId, productVariantId: id, type };
            const resp = await cartUpdate(data)
            showSnackBarOne(resp.message);
            setProcessing(false);
            if(resp.status) {
                 return true;
            } else {
                return false;
            }
        } catch (error) {
            setProcessing(false);
            showSnackBarOne(strings.general_error_msg);
            return false;
        }
    }
    
    const addToCartPress = async () => {
        const resp  = await manageCart(CART_TYPES.ADD)
        if(resp)
        dispatch(add_to_cart({ productId, productVariantId: id }))
    }
    const removeFromCartPress = async () => {
        const resp  = await manageCart(CART_TYPES.REMOVE)
        if(resp)
        dispatch(remove_from_cart({ productId, productVariantId: id }))
    }
    const inCart = cart.findIndex(item => item.productVariantId == selectedVariant.id)
    const { quantity } = cart[inCart] ? cart[inCart] : {};
    const displayPrice = getDisplayPrice(price, sellingPrice)
    return ( 
        <FloatingContainer>
            <PriceContainer>
               {isDiscounted && <Text style={isDiscounted ? { textDecorationLine: 'line-through' } : {}}>{'\u20B9'} {price}</Text>}
                <Spacer space={'0'} width={'10'} />
              
                <Text size={24} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {displayPrice}</Text>
                
                <Spacer width={'10'} />
            </PriceContainer>
            <View style={{ height: 45 }}>
                {processing && <BGOverlvay style={{ zIndex: 1, borderRadius: 5, justifyContent: 'center'}}> 
                    <ActivityIndicator color={colors.white} />
                </BGOverlvay>}
                {
                    inCart > -1 ?
                    <AddToCartButton 
                        qty={quantity} 
                        addToCart={addToCartPress} 
                        removeFromCart={removeFromCartPress}
                        />
                    :
                    <CartButton onPress={addToCartPress}>
                        <Image style={{ height: 10, width: 20 }} source={PLUS_ICON} />
                        <Spacer width={5} />
                        <Text color={colors.white} fontFamily={fonts.bold}>
                            Add to Cart
                        </Text>
                    </CartButton>
                    
                    
                }
            </View>
        </FloatingContainer>
    )
}



export default BottomCard;