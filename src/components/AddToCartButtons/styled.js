import styled from "styled-components/native";
import colors from "../../configs/colors";


export const CartContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    border-radius: 7px;
    height: 45px;
    border: 1px solid ${colors.mainColor};
`

export const CartIcons = styled.Image`
    height: 23px;
    width: 24px;
    padding-right: 2px;
`;
export const ImageContainerLeft = styled.View`
    background-color: ${colors.mainColor};
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 7px 0px 0px 7px;
    width: 40px;
`;
export const ImageContainerRight = styled.View`
    background-color: ${colors.mainColor};
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 0px 7px 7px 0px;
    width: 40px;
    margin: 0px;
`;