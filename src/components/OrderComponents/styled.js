import styled from "styled-components/native";
import colors from "../../configs/colors";

export const OrderItemContainer = styled.View`
    padding: 10px;
    border: 1px solid ${colors.greyColor};
    border-radius: 10px;
    margin-bottom: 15px;
`;
export const OrderStatusContainer = styled.View`
   align-items: flex-end;
`;

export const OrderNumberContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.greyColor};
    border-style: dashed;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

export const OrderProductContainer = styled.View`
    justify-content: space-between;
`;
export const OrderProductStatusContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;