import React from 'react'
import { ImageContainer, MainNameContainer, NameContainer } from './styled'
import { RowView, Spacer, Text } from '../styles'
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const AccountTop = ({ name, phone }) => {
    const navigation = useNavigation();
    function getFirstLetters(str) {
        var words = str.split(' ');
        
        var firstLetter1 = words[0][0].toUpperCase();
        var firstLetter2 = words[1] ? words[1][0].toUpperCase() : '';
        return [firstLetter1, firstLetter2];
    }
    
  return (
    <MainNameContainer>
        <ImageContainer>
            <Text size={20} color={colors.white} fontFamily={fonts.bold}>{getFirstLetters(name)}</Text>
        </ImageContainer>
        <NameContainer>
            <RowView sb={true} style={{ alignItems: 'flex-end' }}>
                <Text size={20} fontFamily={fonts.bold}>{name}</Text>
                <TouchableNativeFeedback onPress={() => navigation.navigate('EditAccount')}>
                    <Text size={16} color={colors.mainColor} fontFamily={fonts.bold}>EDIT</Text>
                </TouchableNativeFeedback>
            </RowView>
            <Spacer space={5} />
            <Text size={14} fontFamily={fonts.medium}>+91-{phone}</Text>
        </NameContainer>
    </MainNameContainer>
  )
}

export default AccountTop