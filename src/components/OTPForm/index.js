import React, { useEffect, useRef, useState } from 'react'
import { OtpContainer, OtpFormContainer, OtpInputContiner } from './styled'
import Input from '../Input'
import { Spacer, Text } from '../styles'
import colors from '../../configs/colors'

const OTPForm = ({ returnOtp }) => {
    const [sec, setSec] = useState(120);
    const [otp, setOtp] = useState(['', '', '', '']);
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);

    const handleTextChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        returnOtp(newOtp.join(''));
        if (text) {
          switch (index) {
            case 0:
              input2.current.focus();
              break;
            case 1:
              input3.current.focus();
              break;
            case 2:
              input4.current.focus();
              break;
            default:
              break;
          }
        }
    };

    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
          switch (index) {
            case 1:
              input1.current.focus();
              break;
            case 2:
              input2.current.focus();
              break;
            case 3:
              input3.current.focus();
              break;
            default:
              break;
          }
        }
      };

      useEffect(() => {
        input1.current.focus();
      }, [])

    useEffect(() => {
        if (sec > 0) {
          const timer = setTimeout(() => {
            setSec(sec - 1);
          }, 1000); // Decrease sec every 1 second
    
          return () => clearTimeout(timer); // Clear the timer when the component is unmounted
        }
    }, [sec]);
    
    const resetCounter = () => {
        setSec(120);
    };
    return(
        <OtpFormContainer>
            <Spacer space={20} />
            <OtpContainer>
                <OtpInputContiner >
                    <Input 
                        title="OTP" 
                        keyboardType='number-pad'  
                        maxLength={1} 
                        inputRef={input1} 
                        onChange={(text) => handleTextChange(text, 0)} 
                        onKeyPress={(event) => handleKeyPress(event, 0)}
                        value={otp[0]}
                        center
                    />
                </OtpInputContiner>
                <OtpInputContiner>
                    <Input 
                        title=" " 
                        keyboardType='number-pad'  
                        maxLength={1} 
                        inputRef={input2} 
                        onChange={(text) => handleTextChange(text, 1)} 
                        onKeyPress={(event) => handleKeyPress(event, 1)}
                        value={otp[1]}
                        center
                    />
                </OtpInputContiner>
                <OtpInputContiner>
                    <Input 
                        title=" " 
                        keyboardType='number-pad'  
                        maxLength={1} 
                        inputRef={input3} 
                        onChange={(text) => handleTextChange(text, 2)} 
                        onKeyPress={(event) => handleKeyPress(event, 2)}
                        value={otp[2]}
                        center
                    />
                </OtpInputContiner>
                <OtpInputContiner>
                    <Input  
                        title=" " 
                        keyboardType='number-pad'  
                        maxLength={1} 
                        inputRef={input4} 
                        onChange={(text) => handleTextChange(text, 3)} 
                        onKeyPress={(event) => handleKeyPress(event, 3)}
                        value={otp[3]}
                        center
                    />
                </OtpInputContiner>
            </OtpContainer>
            <Spacer space={20} />
            { 
            sec ? 
                <Text>
                    Resend OTP in 
                    <Text color={colors.mainColor} > {sec} Sec</Text> 
                </Text>
                :
                <Text onPress={resetCounter} color={colors.mainColor} > Resend OTP</Text>
            }
            
        </OtpFormContainer>
    )
}

export default OTPForm;