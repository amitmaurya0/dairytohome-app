import React, { useEffect, useState } from 'react'
import { BGOverlvay, Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';
import RazorpayCheckout from 'react-native-razorpay';
import CheckoutDetails from '../components/CheckoutComponents'
import { ScrollView, View } from 'react-native';
import { getCartProducts, placeOrder, sendConfirmPayment } from '../apis/order';
import { showSnackBarOne } from '../components/showSnackBarOne';
import BottomFloatingButton from '../components/BottomFloatingButton';
import strings from '../configs/strings';
import { ARROW_RIGHT } from '../configs/images';
import AddressItem from '../components/AddressComponents';
import fonts from '../configs/fonts';
import { useSelector } from 'react-redux';
import deliveryTypes from '../configs/deliveryTypes';
import { useIsFocused } from '@react-navigation/core';
import EmptyPage from '../components/EmptyPage';
import colors from '../configs/colors';
import { RazorpayData } from '../configs';
import Loading from '../components/Loading';

const Checkout = ({ navigation, route }) => {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);
  const { address } = route.params;
  const {deliveryType: { deliveryType }, user} = useSelector((state) => ({
                                            deliveryType: state.deliveryType,
                                            user: state.user
                                          }));
                                          
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
      setProcessing(true)
      const data = { addressId: address.id, paymentType: 'PAID', deliveryType: deliveryTypes[deliveryType].id }
        const details = await placeOrder(data);
       
        if(details.status) {
          // showSnackBarOne(details.message);
          await ProceedToPay(details)
          // navigation.navigate('OrderSuccess' , { deliveryType: deliveryTypes[deliveryType].id });
        } else {
          setProcessing(false)
          setLoading(false);
          setError(false);
          showSnackBarOne(details.message);
        }
    } catch (error) {
      console.log('error====>', error);
      setProcessing(false)
      setLoading(false);
      setError(false);
      showSnackBarOne(strings.general_error_msg);
    }
  }

  const confirmPayment = async (paidData) => {
    try {
      setProcessing(true)
      const data = { 
                      paymentId: paidData.razorpay_payment_id, 
                      signature: paidData.razorpay_signature, 
                      orderId: paidData.razorpay_order_id, 
                      orderNumber: paidData.orderNumber 
                    }
        const details = await sendConfirmPayment(data);
       
        if(details.status) {
          showSnackBarOne(details.message);
          navigation.navigate('OrderSuccess' , { deliveryType: deliveryTypes[deliveryType].id });
        } else {
          setProcessing(false)
          setLoading(false);
          setError(false);
          showSnackBarOne(details.message);
        }
    } catch (error) {
     
      setProcessing(false)
      setLoading(false);
      setError(false);
      showSnackBarOne(strings.general_error_msg);
    }
  }

  const ProceedToPay = (orderData) => {
    var options = {
      description: `Payment made for ${orderData.orderNumber}`,
      // image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: RazorpayData.id,
      amount: orderData.amount,
      name: 'DairyToHome',
      order_id: orderData.orderId,//Replace this with an order_id created using Orders API.
      prefill: {
        email: '',
        contact: user.phone,
        name: user.name
      },
      theme: {color: colors.mainColor}
    }

    RazorpayCheckout.open(options).then(async (data) => {

      await confirmPayment({ ...data, orderNumber: orderData.orderNumber})
      
    }).catch((error) => {
      setProcessing(false);
      console.log("ERROR", error);
      showSnackBarOne(error.description);
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
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
     { processing && <BGOverlvay full={true} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ borderRadius: 5, height: 100, width: 150, backgroundColor: 'white', elevation:5 }}>
          <Loading />
        </View>
      </BGOverlvay>}
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