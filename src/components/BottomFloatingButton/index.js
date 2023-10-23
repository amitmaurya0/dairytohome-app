import React from 'react'
import { PriceContainer, FloatingContainer, CartButton } from './styled'
import { Spacer, Text } from '../styles';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';
import { Image } from 'react-native';

const BottomFloatingButton = ({ price, buttonWidth=160, buttonHeight=45, sellingPrice, onPress, buttonText, icon }) => {
   
    const isDiscounted = sellingPrice > 0 && sellingPrice < price ? true: false
    const displayPrice = isDiscounted ? sellingPrice : price
    return ( 
        <FloatingContainer>
            <PriceContainer>
                <Spacer space={'0'} width={'10'} />
                {
                    isDiscounted && <Text size={12} style={isDiscounted ? { textDecorationLine: 'line-through' } : {}}>{'\u20B9'} {price}</Text>
                }
               <Text size={22} color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {displayPrice}</Text>
               
                <Spacer width={'10'} />
            </PriceContainer>
            {
                <CartButton style={{ width: buttonWidth, height: buttonHeight }} onPress={onPress}>
                    <Text size={18} color={colors.white} fontFamily={fonts.bold}>
                       {buttonText}
                    </Text>
                    <Spacer width={5} />
                    <Image style={{ height: 10, width: 20 }} source={icon} />
                </CartButton>
            }
        </FloatingContainer>
    )
}



export default BottomFloatingButton;