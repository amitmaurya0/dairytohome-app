import React, { useState } from 'react'
import MainWrapper from '../../components/MainWrapper';
import Input from '../../components/Input'
import {showSnackBarOne} from '../../components/showSnackBarOne'
import Button from '../../components/Button'
import { Spacer, Text } from '../../components/styles'
import fonts from '../../configs/fonts';
import strings from '../../configs/strings';
import {isValidMobileNumber, isValidName} from '../../configs/helper';
import { Keyboard, TouchableOpacity } from 'react-native';
import { mobileLogin } from '../../apis/loginRequests';

const Login = ({ navigation, route }) => {
    const [data, setData] = useState({ name: "", mobile: "" })
    const [loading, setLoading] = useState(false)
    const { isLogin=true } = route && route.params ? route.params : {};
    const onNameChange = (name) => {
        setData({ ...data, name })
    }
    const onMobileChange = (mobile) => {
        setData({ ...data, mobile })
    }

    const onButtonPress = async () => {
        Keyboard.dismiss()
        try {
            if(!isLogin && !isValidName(data.name)) {
                showSnackBarOne(strings.enter_name)
                return;
            }
            if(!isValidMobileNumber(data.mobile)){
                showSnackBarOne(strings.enter_mobile_number)
                return;
            }
            
            setLoading(true)
            const apiData = await mobileLogin(data.mobile, data.name, isLogin)
            
            setLoading(false)
        
            if (apiData.status) {
              navigation.navigate('Otp', { ...data, isLogin: isLogin })
            } else  {
              showSnackBarOne(apiData.message)
            }
            
            
        } catch (error) {
            setLoading(false)
            showSnackBarOne(strings.general_error_msg)
            console.log(error);
        }
        
    }

    const loginRegisterNavigation = () => {
        Keyboard.dismiss()
        navigation.navigate('Login', { isLogin: !isLogin })
    }

    return (
        <MainWrapper 
            title={ isLogin ? "Login" : "Register"}
            subHeading={ isLogin ? "Enter your mobile number to login" : "Enter your phone number to quickly register"}
        >
            <Spacer space={20} />
            {!isLogin && <Input 
                title="Your Name"
                placeholder="Enter your name here"
                onChange={onNameChange} 
            />}
            <Input 
                prefix="+91"
                title="Your Mobile Number"
                placeholder="1234567890" 
                keyboardType='number-pad'
                maxLength={10}
                onChange={onMobileChange} 
            />
            <Spacer space={isLogin ? 124 : 20} />
            <Button children="Continue" loading={loading} onPress={onButtonPress} />
            <Spacer space={30} />
            <TouchableOpacity onPress={loginRegisterNavigation}>
                <Button transparent={true} children={isLogin ? 'Or Register' : 'Or Login'} onPress={loginRegisterNavigation} />
              
            </TouchableOpacity>
        </MainWrapper>
    )
}

export default Login;