import React, { useEffect, useState } from 'react'
import { BGOverlvay, Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';

import CartDetails from '../components/CartComponents'
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { cartUpdate, getCartProducts } from '../apis/order';
import { showSnackBarOne } from '../components/showSnackBarOne';
import BottomFloatingButton from '../components/BottomFloatingButton';
import strings from '../configs/strings';
import { ARROW_RIGHT, CARET_RIGHT } from '../configs/images';
import { initialize_cart } from '../actions/CartAction';
import { useDispatch } from 'react-redux';
import colors from '../configs/colors';
import EmptyPage from '../components/EmptyPage';
import { useIsFocused } from '@react-navigation/core';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Cart = ({ navigation, route }) => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const fetchCart = async () => {
    try {
        const details = await getCartProducts();
        setLoading(false);
        setProcessing(false)
        if(details.status) {
          const cartData = details.data.products.map(item => ({ productId: item.productId, productVariantId: item.productVariantId, quantity: item.quantity }))
          dispatch(initialize_cart(cartData))
          setCart(details.data);
        } else {
          setError(false);
          showSnackBarOne(details.message);
        }
    } catch (error) {
      console.log('error', error)
      setProcessing(false)
      setLoading(false);
      setError(false);
      showSnackBarOne(strings.general_error_msg);
    }
  }

 
    
  const manageCart = async (type, productId, productVariantId) => {
    
      try {
          setProcessing(true);
          const data = { productId, productVariantId, type };
          const resp = await cartUpdate(data);

          await fetchCart();
          showSnackBarOne(resp.message);
      } catch (error) {
          console.log('error', error)
          fetchCart();
          showSnackBarOne(strings.general_error_msg);
      }
  }

  useEffect(() => {
    fetchCart();
  }, [])

  const isFocused = useIsFocused()
  useEffect(() => {
    fetchCart();
  }, [isFocused])

  return (
    <MainWrapper loading={loading} title="Your Cart" >
     { processing &&  <BGOverlvay style={{ zIndex: 1, width: windowWidth, height: windowHeight, justifyContent: 'center'}}> 
                <ActivityIndicator color={colors.white} />
            </BGOverlvay>}
            
            {
               cart && 
               cart.products && cart.products.length > 0 ? 
                <>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <CartDetails cart={cart} onAction={manageCart} />
                </ScrollView>
                <BottomFloatingButton 
                  buttonText="Continue"
                  onPress={()=>{navigation.navigate('CartAddress', { totalPrice: cart.totalPrice })}}
                  price={cart.totalPrice}
                  icon={ARROW_RIGHT}
                />
              </>
              :
              <EmptyPage title={strings.empty_cart_title} subTitle={strings.empty_cart_sub_title} />
            }
    </MainWrapper>
  )
}


export default Cart