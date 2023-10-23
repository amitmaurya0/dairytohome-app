import React from 'react'
import { ImageContainer, MainNameContainer, NameContainer } from './styled'
import { Text } from '../styles'
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

const AccountTop = ({ name, phone }) => {
    function getFirstLetters(str) {
        var words = str.split(' ');
        
        var firstLetter1 = words[0][0].toUpperCase();
        var firstLetter2 = words[1] ? words[1][0].toUpperCase() : '';
        return [firstLetter1, firstLetter2];
    }
    
  return (
    <MainNameContainer>
        <ImageContainer>
            <Text color={colors.white} fontFamily={fonts.bold}>{getFirstLetters(name)}</Text>
        </ImageContainer>
        <NameContainer>
            <Text size={18} fontFamily={fonts.bold}>{name}</Text>
            <Text size={14}>+91-{phone}</Text>
        </NameContainer>
    </MainNameContainer>
  )
}

export default AccountTop