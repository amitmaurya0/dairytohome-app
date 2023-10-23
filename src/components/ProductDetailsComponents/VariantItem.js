import React from 'react'
import { VariantItemContainer, VariantPriceContainer, DiscountContainer } from './styled';
import { Spacer, Text } from '../styles';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const VariantItem = ({ variant, isSelected=false }) => {
    const isDiscounted = variant.discountPercentage > 0;
    return (
        <VariantItemContainer isSelected={isSelected}>
            <VariantPriceContainer>
                <Text size={14} style={isDiscounted ? { textDecorationLine: 'line-through' } : {}}>{'\u20B9'} {variant.price}</Text>
                
                <Spacer width={'10'} />
                {
                    isDiscounted && <Text fontFamily={fonts.bold}>{'\u20B9'} {variant.sellingPrice}</Text>
                }
                <Spacer width={'10'} />
                <DiscountContainer>
                    <Text size={14} color={colors.white}>{variant.discountPercentage}%</Text>
                </DiscountContainer>
            </VariantPriceContainer>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>{variant.name}</Text>
        </VariantItemContainer>
    )
}

export default VariantItem;
