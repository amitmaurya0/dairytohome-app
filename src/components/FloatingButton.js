
import React from 'react';
import { RowView, Spacer, Text } from './styles';
import { StyledFloatingButton } from './styles'
import { Image } from 'react-native';
import colors from '../configs/colors';
import fonts from '../configs/fonts';

const FloatingButton = ({ image, title,  onPress }) => {
  return (
    <StyledFloatingButton onPress={onPress}>
      <RowView>
        {image && <Image source={image} tintColor={colors.mainColor} style={{ height: 20, width: 20 }} />}
        <Spacer width={'5'} />
        {title && <Text color={colors.mainColor} fontFamily={fonts.medium} >{title} </Text>}
      </RowView>
    </StyledFloatingButton>
  );
};

export default FloatingButton;
