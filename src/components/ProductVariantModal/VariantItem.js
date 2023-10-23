import React from 'react'
import { VariantItemContainer, VariantPriceContainer, DiscountContainer } from './styled';
import { Spacer, Text } from '../styles';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';
import CartButton from '../CartButton';
import { getDisplayPrice } from '../../configs/helper';


const VariantItem = ({ variant, cart }) => {
    const isDiscounted = variant.discountPercentage > 0;
    const displayPrice = getDisplayPrice(variant.price, variant.sellingPrice)
    return (
        <VariantItemContainer>
            <VariantPriceContainer>
                <Text color={colors.mainColor} fontFamily={fonts.bold}>{variant.name}  </Text>
                {
                    isDiscounted && <>
                         <Text style={{ textDecorationLine: 'line-through' }}>{'\u20B9'} {variant.price}</Text>
                        <Spacer width={'10'} />
                    </>
                }
                <Text fontFamily={fonts.bold}>{'\u20B9'} {displayPrice}</Text>
                <Spacer width={'10'} />
                <DiscountContainer>
                    <Text size={14} color={colors.white}>{variant.discountPercentage}%</Text>
                </DiscountContainer>
            </VariantPriceContainer>
            <CartButton productId={variant.productId} productVariantId={variant.id} />
        </VariantItemContainer>
    )
}

export default VariantItem;
