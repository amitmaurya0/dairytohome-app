import React from 'react'
import { ActivityIndicator } from 'react-native';
import { ButtonContainer, ButtonText } from './styled';

const Button = ({loading, onPress, children, transparent, full, buttonStyle={}, textStyle={}}) => {
    const style = {};
    const inTextStyle = {}
    if(transparent) {
        style.backgroundColor = 'transparent';
        inTextStyle.color = 'black'
    }
    return (
        <ButtonContainer style={{...style, ...buttonStyle}} full={full} loading={loading} onPress={loading ? null : onPress}>
            {loading ? <ActivityIndicator color="white" /> : <ButtonText style={{...inTextStyle, ...textStyle}}>{children}</ButtonText>}
        </ButtonContainer>
    )
}

export default Button;