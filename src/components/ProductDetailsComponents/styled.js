import styled from "styled-components/native";
import {Picker} from '@react-native-picker/picker';
import colors from "../../configs/colors";


export const StyledImage = styled.Image`
  height: 300px; 
  width: auto;    

`;


export const ImageViewWrapper = styled.View`
  /* background-color: #f0f0f0; */
`;

// Styled View component
export const Container = styled.View`
`;

// Styled Text component
export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

// Styled RNPickerSelect component
export const StyledPicker = styled(Picker)`
  wdith: 100px;
  border-radius: 10px;
  border: 1px solid grey;
`;

export const PickerContainer = styled.View`
  width: 150px;
  border-radius: 10px;
  border: 1px solid grey;
  padding-top: 0px;
  height: 30px;
`;




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
  height: 45px;
  width: 160px;
`;

export const PriceContainer = styled.View`
  flex-direction: column;
`;

export const ItemType = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
`;

// VARIANT ITEM STYLES

export const VariantItemContainer = styled.View`
  border-radius: 5px;
  border: ${props => props.isSelected ? ` 1.5px solid ${colors.mainColor}` : '1px solid grey'}  ;
  flex-direction:row ;
  justify-content: space-between;
  padding: 13px;
  margin-bottom: 7px;
`;
export const VariantPriceContainer = styled.View`
  flex-direction:row ;
  align-items: center;
  justify-content: center;
`;

export const DiscountContainer = styled.View`
  display: flex;
  background-color: green;
  padding: 2px 7px;
 
  align-items: center;
  justify-content: center;
`;