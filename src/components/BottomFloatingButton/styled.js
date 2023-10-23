import styled from "styled-components/native";
import {Picker} from '@react-native-picker/picker';
import colors from "../../configs/colors";






// Styled Container
export const FloatingContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  elevation: 4;  
  shadow-color: #000;  
  shadow-opacity: 0.25;
`;

// Styled Price Text
export const PriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

// Styled Add to Cart Button
export const CartButton = styled.TouchableOpacity`
  
  background-color: ${colors.textBlack};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 140px;
`;

export const PriceContainer = styled.View`
  flex-direction: column;
`;

export const ItemType = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
`;
