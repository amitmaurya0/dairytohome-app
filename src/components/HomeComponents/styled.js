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
    padding: 10px;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MainContainer = styled.View`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    elevation: 3;
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