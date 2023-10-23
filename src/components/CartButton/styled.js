import styled from "styled-components/native";
import colors from "../../configs/colors";

export const CartButton = styled.TouchableOpacity`
  
  background-color: ${colors.mainColor};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.isHome ? '30px': '35px'};
  width: ${(props) => props.isHome ? '80px': '130px'};
  padding-right: 5px;
`;

export const CartContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.isHome ? '80px': '130px'};
    border-radius: 5px;
    height: ${(props) => props.isHome ? '30px': '35px'};
    border: 1px solid ${colors.mainColor};
`

export const CartIcons = styled.Image`
    height: 20px;
    width: 20px;
    padding-right: 2px;
`;
export const ImageContainerLeft = styled.View`
    
    height: ${(props) => props.isHome ? '30px': '35px'};
    align-items: center;
    justify-content: center;
    border-radius: 5px 0px 0px 5px;
    width: ${(props) => props.isHome ? '30px': '35px'};
`;
export const ImageContainerRight = styled.View`
    
    height: ${(props) => props.isHome ? '30px': '35px'};
    align-items: center;
    justify-content: center;
    border-radius: 0px 5px 5px 0px;
    width: ${(props) => props.isHome ? '30px': '35px'};
    margin: 0px;
`;