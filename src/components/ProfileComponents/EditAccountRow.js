import React from 'react'
import { ImageContainer, MainNameContainer, NameContainer } from './styled'
import { RowView, Spacer, Text } from '../styles'
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const EditAccountRow = ({ title, value, onPress }) => {
    const navigation = useNavigation();
    function getFirstLetters(str) {
        var words = str.split(' ');
        
        var firstLetter1 = words[0][0].toUpperCase();
        var firstLetter2 = words[1] ? words[1][0].toUpperCase() : '';
        return [firstLetter1, firstLetter2];
    }
    
  return (
    <MainNameContainer>
        <NameContainer>
            <RowView sb={true} style={{ alignItems: 'flex-end' }}>
                <Text size={16} fontFamily={fonts.bold}>{title}</Text>
                <TouchableNativeFeedback onPress={() => navigation.navigate('EditAccount')}>
                    <Text size={14} color={colors.mainColor} fontFamily={fonts.bold}>EDIT</Text>
                </TouchableNativeFeedback>
            </RowView>
            <Spacer space={5} />
            <Text size={14} >{value}</Text>
        </NameContainer>
    </MainNameContainer>
  )
}

export default EditAccountRow