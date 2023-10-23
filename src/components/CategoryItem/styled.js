import styled from "styled-components/native";
import colors from "../../configs/colors";


export const CategoryContainer = styled.View`
    border-radius: 10px;
    background-color: ${colors.transparent};
    padding-bottom: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 60px;
    margin-left: 5px;
    align-items: center;
    background-color: white;
    shadow-color: "#000";
    shadow-offset: {
        width: 0px;
        height: 1px;
    };
    shadow-opacity: 0.20px;
    shadow-radius: 1.41px;

    elevation: 2;
`;

export const CategoryImage = styled.Image`
    border-radius: 10px 10px 0px 0px;
    height: 50px;
    width: 60px;
    align-self: center;
    
`;
export const ImageContainer = styled.View`
    height: 50px;
    width: 60px;
    justify-content: center;
    align-items: center;
`;

