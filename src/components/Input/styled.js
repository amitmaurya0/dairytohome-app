import styled from 'styled-components/native'
import fonts from './../../configs/fonts'

export const InputBoxContainer = styled.View`
   
`;

export const InputBox = styled.TextInput`
   width: 100%;
`

export const Label = styled.Text`
    top: 0;
    left: 0;
    font-family: ${fonts.bold};
    font-weight: 500;
    color: #3a484c;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
`;

export const PrefixText = styled.Text`
    margin-top: -3px
`;

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    border-color: grey;
    border-width: 0.4px;
    padding-left: 10px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`;