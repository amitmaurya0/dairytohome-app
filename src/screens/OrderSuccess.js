import React, { useEffect, useState } from 'react'
import { BGOverlvay, Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { initialize_cart } from '../actions/CartAction';



const OrderSuccess = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(initialize_cart([]))
  }, [])

  return (
    <MainWrapper loading={loading} >
      <Text>Order placed successfully.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </MainWrapper>
  )
}


export default OrderSuccess