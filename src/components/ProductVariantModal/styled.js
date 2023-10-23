import styled from "styled-components/native";
import colors from "../../configs/colors"


export const DeliveryTypeContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid ${colors.mainColor};
    align-items: cneter;
`
export const TopContainer = styled.View`
    flex-direction: row;
`;

export const CartUserContainer = styled.View`
    lex-direction: row;
`;



export const ModalContainer = styled.View`
    flex: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    
`;

export const MainContainer = styled.View`
    width: 100%;
    background-color: white;
    elevation: 3;
    border-radius: 10px 10px 0px 0px;
    padding: 20px;
`;

export const BGOverlvay = styled.View`
    height: 100%;
    width: 100%;
    flex:1;
    position: absolute;
    background-color: #000000;
    opacity: 0.7;
`;

// VARIANT ITEM STYLES

export const VariantItemContainer = styled.View`
  border-radius: 5px;
  border: ${props => props.isSelected ? ` 1.5px solid ${colors.mainColor}` : '1px solid grey'}  ;
  flex-direction:row ;
  justify-content: space-between;
  padding: 10px;
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
  padding: 1px 7px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;