import React, { useState } from 'react'
import MainWrapper from '../components/MainWrapper';
import { Spacer, Text } from '../components/styles';
import DeliveryTypeItem from '../components/DeliveryTypeItem';
import { Image, StyleSheet, View } from 'react-native';
import { MILK_SPLASH_ICON } from '../configs/images';
import { useDispatch } from 'react-redux';
import deliveryTypes from '../configs/deliveryTypes';


const DeliveryType = ({ navigation, route }) => {
  
  

    return (
        <View style={style.imgContainer}>

            <MainWrapper 
                title="Delivery Mode"
                subHeading="Select the type of delivery you want"
                back={false}
            >
                <Spacer space={50} />
                <DeliveryTypeItem data={deliveryTypes.SLOT} onPress={()=>navigation.navigate('Home')} />
                <Spacer space={30} />
                <DeliveryTypeItem data={deliveryTypes.INSTANT} onPress={()=>navigation.navigate('Home')} />
            
            </MainWrapper>
            <Image source={MILK_SPLASH_ICON} style = {style.image}  />
        </View>
    )
}
const style = StyleSheet.create({
    imgContainer: {
        flex: 1,
       height: '100%',
       backgroundColor: '#ffffff'
    },
    image: {
        height:268,
        width: 160,
        resizeMode: 'contain',
        //aspectRatio: 9 / 16, // Your aspect ratio
        position: 'absolute',
        right: 0,
        bottom: 0,
    }
});
export default DeliveryType