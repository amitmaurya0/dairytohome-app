import styled from "styled-components/native";
import colors from "../../configs/colors";


export const MainNameContainer = styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    border-style: dashed;
    padding-bottom: 10;
    border-bottom-color: ${colors.greyColor};

`

export const ImageContainer = styled.View`
    height: 52px;
    width: 52px;
    border-radius: 25px;
    background-color: ${colors.textBlack};
    margin-right: 10px;
    align-items: center;
    justify-content: center;
`;

export const NameContainer = styled.View`
    flex: 1;
`;

export const SettingItemContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.greyColor};
    border-bottom-style: solid;
    padding-top: 10px;
    padding-bottom: 10px;
`;