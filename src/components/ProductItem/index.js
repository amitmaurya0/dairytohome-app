import React, { useState } from 'react'
import { ProductContainer, ProductInfoContainer, ProductImage, ProductSizeLabel, ImageContainer } from './styled';
import { Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import { ADD_TO_CART_LIGHT, CARET_DOWN, PLUS_ICON } from '../../configs/images';
import colors from '../../configs/colors';
import { Image, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { IMG_URL } from '../../configs';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../actions/CartAction';
import { showSnackBarOne } from '../showSnackBarOne';
import CartButton from '../CartButton';
import strings from '../../configs/strings';
import ProductVariantModal from '../ProductVariantModal';


const ProductItem = ({ product={}, onProductPresss }) => {
    const [showSizeModal, setShowSizeModal] = useState(false);
    const { name, isAdded, image='', id, color, categoryName, productVariants=[] } = product;
    console.log('productVariants==>', productVariants)
    const { name: variantName, price, sellingPrice, slug, id: productVariantId, productId } = productVariants[0];
    const { cart=[] } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    
    const addToCartPress = () => {
        dispatch(add_to_cart({ id, productVariantId: productVariantId }));
        showSnackBarOne(strings.product_added_to_cart)
    }
    const removeFromCartPress = () => {
        dispatch(remove_from_cart({ id, productVariantId: productVariantId }))
    }
    const inCart = cart.findIndex(item => item.productVariantId == productVariantId)
    const { quantity } = cart[inCart] ? cart[inCart] : {};
    return(
        <>
            <TouchableNativeFeedback onPress={onProductPresss}>
                <ProductContainer>
                    <ImageContainer>
                        <ProductImage source={{ uri: `${IMG_URL}${image}` }} />
                    </ImageContainer>
                
                    <View>
                        <Text color={colors.mainColor} fontFamily={fonts.bold} size={16}>{name}</Text>
                    </View>
                    <ProductInfoContainer>
                        <View>
                            <Text color={colors.greyColor} size={14}>{categoryName}</Text>
                            <Text fontFamily={fonts.bold} size={16}>{'\u20B9'} {price}</Text>
                        </View>
                        {
                            productVariants.length > 1 ? <TouchableOpacity onPress={() => setShowSizeModal(true)}>
                                <ProductSizeLabel>
                                    <Text fontFamily={fonts.medium} color={colors.variantOptionColor} size={13}>{productVariants.length} options</Text>
                                    <Image source={CARET_DOWN} style={{ height: 20, width: 20, marginTop: 2, marginLeft:2 }} />
                                </ProductSizeLabel>
                            </TouchableOpacity>
                            :
                            <CartButton type="HOME" productId={productId} productVariantId={productVariantId} />
                            
                        }
                    </ProductInfoContainer>
                </ProductContainer>
            </TouchableNativeFeedback>
            {showSizeModal && <ProductVariantModal productName={name} variants={productVariants} closeModal={() => setShowSizeModal(false)} />}
        </>
    )
}

export default ProductItem;