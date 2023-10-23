import React, { Component } from 'react';
import { View ,ActivityIndicator,Text} from 'react-native';
import colors from '../configs/colors';


const Loading = ({ loading=true, color=colors.mainColor }) =>{
    if(!loading)
        return null;
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>

        <ActivityIndicator color={color} />
        <Text style={{ color: color }} >Please wait...</Text>
    </View>
)}

export default Loading;