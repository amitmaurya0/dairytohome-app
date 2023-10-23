import React, { useEffect, useRef, useState } from 'react'
import { InputBox, InputBoxContainer, InputContainer, Label, PrefixText } from './styled';
import { Keyboard, Text, View } from 'react-native';

const Input = ({ center, title, inputRef=null, onChange, placeholder, prefix, maxLength, keyboardType="default", value, onKeyPress }) => {
    const [keyboardOffset, setKeyboardOffset] = useState(0);
    const onKeyboardShow = event => setKeyboardOffset(event.endCoordinates.height);
    const onKeyboardHide = () => setKeyboardOffset(0);
    const keyboardDidShowListener = useRef();
    const keyboardDidHideListener = useRef();

    useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);

    return () => {
        keyboardDidShowListener.current.remove();
        keyboardDidHideListener.current.remove();
    };
    }, []);
    return(
        <InputBoxContainer>
            <Label>{title}</Label>
            <InputContainer style={center && { paddingLeft: 0 }}>
                {prefix && <PrefixText>{prefix}</PrefixText>}
                <InputBox 
                   
                    ref={inputRef} 
                    onChangeText={onChange} 
                    placeholder={placeholder} 
                    maxLength={maxLength} 
                    keyboardType={keyboardType}
                    onKeyPress={onKeyPress} 
                    value={value}
                    style={{ textAlign: center ? 'center' : 'auto', marginBottom:keyboardOffset }}
                />
            </InputContainer>
        </InputBoxContainer>
    )
}

export default Input;