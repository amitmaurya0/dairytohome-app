import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Spacer, Text } from './styles';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../configs/colors';
import fonts from '../configs/fonts';
import { SCHEDULE_DELIVERY_ICON, INSTANT_DELIVERY_ICON } from '../configs/images';
import { useDispatch } from 'react-redux';
import deliveryTypes from '../configs/deliveryTypes';
import { set_delivery_type } from '../actions/DeliveryTypeAction'
import { useNavigation } from '@react-navigation/core';

const DeliveryTypeItem = ({ onPress, data={} }) => {
    const navigation = useNavigation();
    const { title, subTitle, type } = data;
    const gradient = type == deliveryTypes.SLOT.type ? ['rgb(15, 119, 240)', 'rgb(0, 176.85, 255)'] : ['rgb(240, 190.5, 15)', 'rgb(255, 183.6, 0)']
    const iconImage = type == deliveryTypes.SLOT.type ? SCHEDULE_DELIVERY_ICON : INSTANT_DELIVERY_ICON
    const dispatch = useDispatch();
    const onDeliveryPress = () => {
        dispatch(set_delivery_type(type));
        onPress();
    }
    return (
        <TouchableHighlight onPress={onDeliveryPress}>
            <LinearGradient start={{ x: 0, y: 0.5 }} style={styles.gradient} colors={gradient} >
                <Image source={iconImage} style = {{ width:70, height:70 }} />
                <Spacer space={20} width={10} />
                <View style={styles.textContainer}>
                    <Text size={18} textAlign="center" fontFamily={fonts.bold} color={colors.white}>{title}</Text>
                    <Spacer space={5} />
                    <Text>{subTitle}</Text>
                </View>
            </LinearGradient>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({ 
    gradient: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'flex-start',
        width: '70%'
    }
}); 

export default DeliveryTypeItem;

