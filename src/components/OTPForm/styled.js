import styled from "styled-components/native";
import fonts from "../../configs/fonts";


export const OtpFormContainer = styled.View`
  
`;
export const OtpContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const OtpInputContiner = styled.View`
    display: flex;
    flex-direction: row;
    width: 21%
`;

export const Label = styled.Text`
    top: 0;
    left: 0;
    font-family: ${fonts.bold};
    font-weight: 500;
    color: #3a484c;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
`;