import React from 'react'
import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native'
import { Spacer, Text } from './styles';
import fonts from '../configs/fonts';

const windowHeight = Dimensions.get('window').height;

const EmptyContainer = styled.View`
    height: ${windowHeight-200}px;
    align-items: center;
    justify-content: center;
`;

const EmptyPage = ({ title, subTitle }) => {
    return (
        <EmptyContainer>
            <Text size={20} fontFamily={fonts.bold}>{title}</Text>
            <Spacer />
            <Text>{subTitle}</Text>
        </EmptyContainer>
    )
}

export default EmptyPage