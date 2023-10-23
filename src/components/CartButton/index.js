import React, { useState } from 'react'
import { ActivityIndicator, Image } from 'react-native'
import { BGOverlvay, Spacer, Text } from '../styles'
import { CartButton, CartContainer, CartIcons, ImageContainerRight, ImageContainerLeft } from './styled'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'
import { ADD_TO_CART, MINUS_ICON, PLUS_ICON, REMOVE_FROM_CART } from '../../configs/images'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart, remove_from_cart } from '../../actions/CartAction'
import { TouchableOpacity } from 'react-native'
import { showSnackBarOne } from '../showSnackBarOne'
import strings from '../../configs/strings'
import { CART_TYPES } from '../../configs'
import { cartUpdate } from '../../apis/order'
import Loading from '../Loading'

const SmallCartButton = ({ onAction, productId, productVariantId, type=null  }) => {
    
    const { cart=[] } = useSelector((state) => state);
    const [processing, setProcessing] = useState(false);
    const dispatch = useDispatch();
    
    const manageCart = async (type) => {
        try {
            setProcessing(true);
            const data = { productId: productId, productVariantId: productVariantId, type };
            const resp = await cartUpdate(data)
            showSnackBarOne(resp.message);
            setProcessing(false);
            if(resp.status) {
                 if(CART_TYPES.ADD == type) {
                    dispatch(add_to_cart({ productId, productVariantId }))
                 } else {
                    dispatch(remove_from_cart({ productId, productVariantId }))
                 }
                
            } else {
                return false;
            }
        } catch (error) {
            console.log('error', error)
            setProcessing(false);
            showSnackBarOne(strings.general_error_msg);
            return false;
        }
    }
    const inCart = cart.findIndex(item => item.productVariantId == productVariantId)
    console.log(cart, inCart, productVariantId)
    const { quantity } = cart[inCart] ? cart[inCart] : {};

    const isHome = type == "HOME";
    const fontSize = isHome ? 12 : 16;
    return (
        <CartContainer isHome={isHome}>
            {processing && <BGOverlvay style={{ zIndex: 1, borderRadius: 5, justifyContent: 'center'}}> 
                <ActivityIndicator color={colors.white} />
            </BGOverlvay>}
            { 
            (inCart == -1) ? <CartButton  isHome={isHome} onPress={() => manageCart(CART_TYPES.ADD)}>
                <Image style={{ height: 18, width: 18 }} source={PLUS_ICON} />
                <Spacer width={2} />
                <Text size={fontSize} color={colors.white} fontFamily={fonts.bold}>
                    Add
                </Text>
                </CartButton>
            :
                <>
                    <TouchableOpacity onPress={() => manageCart(CART_TYPES.REMOVE)}>
                        <ImageContainerLeft isHome={isHome}>
                            <CartIcons  source={MINUS_ICON} tintColor={colors.mainColor} />
                        </ImageContainerLeft>
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity onPress={() => manageCart(CART_TYPES.ADD)}>
                        <ImageContainerRight isHome={isHome}>
                            <CartIcons tintColor={colors.mainColor} source={PLUS_ICON} />
                        </ImageContainerRight>
                    </TouchableOpacity>
                </>
            }
        </CartContainer>
    )
}

export default SmallCartButton