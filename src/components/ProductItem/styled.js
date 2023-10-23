import styled from "styled-components/native";
import colors from "../../configs/colors";


export const ProductContainer = styled.View`
    border-radius: 10px;
    background-color: ${colors.white};
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 47%;
    margin-left: 5px;
    margin-right: 5px;
    shadow-color: "#000";
    shadow-offset: {
        width: 0px;
        height: 1px;
    };
    shadow-opacity: 0.20px;
    shadow-radius: 1.41px;

    elevation: 2;
`;

export const ProductInfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;
export const ProductSizeLabel = styled.View`
    border-radius: 10px;
    border: 0.5px solid ${colors.variantOptionColor};
    padding: 4px 8px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ProductImage = styled.Image`
    height: 150px;
    width: 150px;
    resize-mode: contain;
`;
export const ImageContainer = styled.View`
    height: 150px;
    justify-content: center;
    align-items: center;
`;

