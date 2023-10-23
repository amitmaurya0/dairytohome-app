import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native';

const StyledWrapper = styled.View`
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
    flex: 1;
    background-color: #FFFFFF;
`;

export const LeftSideContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ImageContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HeadingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const ImageIcon = styled.Image`
    height: 22px;
    width: 22px;
    padding: 10px;
    margin-left: 10px;
`;

export default StyledWrapper;