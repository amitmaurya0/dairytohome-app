import React, { useState } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux' 
import MainWrapper from '../../components/MainWrapper';
import OTPForm from '../../components/OTPForm'
import Button from '../../components/Button'
import { Spacer } from '../../components/styles'
import { SubHeading } from '../../components/Headings';
import { Keyboard } from 'react-native';
import { showSnackBarOne } from '../../components/showSnackBarOne';
import { isValidMobileNumber, isValidName, isValidOTP } from '../../configs/helper';
import strings from '../../configs/strings';
import {add_user} from '../../actions/UserAction'
import { mobileLogin } from '../../apis/loginRequests';
import { saveDataOfUser } from '../../database/UserData';

const Otp = ({ route, navigation }) => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false)

    const { mobile, name, isLogin } = route.params;

    const dispatch = useDispatch();

    const onOtpConfirm = async () => {
        Keyboard.dismiss()
        try {
            if(!isLogin && !isValidName(name)) {
                showSnackBarOne(strings.enter_name)
                return;
            }
            if(!isValidMobileNumber(mobile)){
                showSnackBarOne(strings.enter_mobile_number)
                return;
            }
            
            if(!isValidOTP(otp)){
                showSnackBarOne(strings.enter_otp)
                return;
            }
            
            setLoading(true)
            const apiData = await mobileLogin(mobile, name, isLogin, otp )
            
            setLoading(false)
        
            if (apiData.status) {
              let userData = {
                id: apiData.user.id,
                name: apiData.user.name,
                mobile: apiData.user.phone,
                image: apiData.user.profileImage,
                token: apiData.token,
              }
              saveDataOfUser(userData)
              dispatch(add_user(userData))
            //   navigation.navigate('DeliveryType');
            } else  {
              showSnackBarOne(apiData.message)
            }
            
            
        } catch (error) {
            console.log('error==>', error);
            showSnackBarOne(strings.general_error_msg)
        }
        
    }

    return (
        <MainWrapper 
            title="Enter OTP"
            subHeading="Enter the otp received on your phone"
        >
            <SubHeading>+91 {mobile}</SubHeading>
            <OTPForm returnOtp={(val) => setOtp(val)}  />
            <Spacer space={74} />
            <Button children="Verify & Continue" loading={loading} onPress={onOtpConfirm} />
        </MainWrapper>
    )
}

export default Otp;
