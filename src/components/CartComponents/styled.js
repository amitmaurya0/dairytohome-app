import styled from "styled-components/native";
import colors from "../../configs/colors";


export const ItemContainer = styled.View`
    border: 1px solid ${colors.greyColor};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;