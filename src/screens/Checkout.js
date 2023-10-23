import React, { useEffect, useState } from 'react'
import { Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';

import CheckoutDetails from '../components/CheckoutComponents'
import { ScrollView } from 'react-native';
import { getCartProducts, placeOrder } from '../apis/order';
import { showSnackBarOne } from '../components/showSnackBarOne';
import BottomFloatingButton from '../components/BottomFloatingButton';
import strings from '../configs/strings';
import { ARROW_RIGHT, CARET_RIGHT } from '../configs/images';
import AddressItem from '../components/AddressComponents';
import fonts from '../configs/fonts';
import { useSelector } from 'react-redux';
import deliveryTypes from '../configs/deliveryTypes';
import { useIsFocused } from '@react-navigation/core';
import EmptyPage from '../components/EmptyPage';

const Checkout = ({ navigation, route }) => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { address } = route.params;
  const {deliveryType} = useSelector((state) => state.deliveryType);
  const fetchCart = async () => {
    try {
        const details = await getCartProducts();
        setLoading(false);
        if(details.status) {
          setCart(details.data);
        } else {
          setError(false);
          showSnackBarOne(details.message);
        }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(false);
      showSnackBarOne(strings.general_error_msg);
    }
  }

  const pressOnPay = async () => {
    try {
      console.log(deliveryTypes, deliveryType);
      const data = { addressId: address.id, paymentType: 'COD', deliveryType: deliveryTypes[deliveryType].id }
        const details = await placeOrder(data);
       
        if(details.status) {
          showSnackBarOne(details.message);
          navigation.navigate('OrderSuccess');
        } else {
          setLoading(false);
          setError(false);
          showSnackBarOne(details.message);
        }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(false);
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
    <MainWrapper loading={loading} title="Checkout" >
      {
          cart && 
          cart.products && cart.products.length > 0 ?
          <>
            <ScrollView>
              <Spacer />
              <CheckoutDetails cart={cart} />
              <Text fontFamily={fonts.bold}>Delivery Address</Text>
              <Spacer />
              <AddressItem address={address} />
            </ScrollView>
            <BottomFloatingButton 
              buttonWidth={225}
              buttonText="Proceed to payment"
              onPress={pressOnPay}
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


export default Checkout