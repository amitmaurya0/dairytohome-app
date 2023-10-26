import React, { useEffect, useState } from 'react'
import { BGOverlvay, Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { initialize_cart } from '../actions/CartAction';
import { ORDER_SUCCESS } from '../configs/images';
import fonts from '../configs/fonts';
import Button from '../components/Button';
import colors from '../configs/colors';



const OrderSuccess = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  
  const disptach = useDispatch();
  const { deliveryType, deliveryDate="", deliveryTime="" } = route.params || {};
  useEffect(() => {
    
    disptach(initialize_cart([]))
  }, [])

  return (
    <MainWrapper loading={loading} title='Order Details'>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1  }}>
        <Image source={ORDER_SUCCESS} style={{ height: 72, width: 72 }} />
        <Spacer />
        <Text size={24} fontFamily={fonts.bold}>Order placed successfully!</Text>
        <Spacer />
        <Text size={18} >Sit back and relax now!</Text>
        <Spacer space={72} />
        <Text size={20} fontFamily={fonts.bold}>Delivery in</Text>
        <Spacer space={20} />
        {
          deliveryType == 1 ? <><Text>30 Minutes</Text></> : <><Text fontFamily={fonts.bold}>{deliveryDate}</Text><Spacer space="5" /><Text fontFamily={fonts.bold} color={colors.mainColor}>{deliveryTime}</Text></>
        }
      </View>
      <Button buttonStyle={{ height: 50 }} onPress={() => navigation.replace('Home')}>
        Place another order
      </Button>
    </MainWrapper>
  )
}


export default OrderSuccess