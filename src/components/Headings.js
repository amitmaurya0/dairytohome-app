import styled from 'styled-components/native';
import fonts from '../configs/fonts'
import colors from '../configs/colors'


export const MainHeading = styled.Text`
    color: ${colors.mainColor};
    font-family: ${fonts.bold};
    font-size: 20px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    top: 0;
    width: 229px;
`;

export const SubHeading = styled.Text`
  top: 0;
  left: 0;
  font-family: ${fonts.regular};
  font-weight: 400;
  color: ${colors.textBlack};
  font-size: 16px;
  letter-spacing: 0;
  line-height: 30px;
`;

export default { MainHeading, SubHeading }
