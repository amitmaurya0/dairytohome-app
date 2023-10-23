import styled from 'styled-components/native'
import fonts from '../configs/fonts';
import colors from '../configs/colors';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Spacer = styled.View`
    height: ${props => props.space ? props.space : 10}px;
    width: ${props => props.width ? `${props.width}px` : `100%`};
`;

export const Divider = styled.View`
    
    border-bottom-width: 1px;
    border-color: grey;
    border-style: dashed;
    width: 100%;
    opacity: 0.3;
`;

export const Text = styled.Text`
    top: 0;
    left: 0;
    font-family: ${props => props.fontFamily ? props.fontFamily : fonts.regular};
    font-weight: 500;
    color: ${props => props.color ? props.color : '#3a484c'};
    font-size: ${props => props.size ? props.size : 16}px;
    letter-spacing: 0;
    text-align: ${props => props.textAlign ? props.textAlign : 'auto'};
`;


export const RowView = styled.View`
    justify-content: ${(props) => props.sb == false ? 'flex-start' : 'space-between'} ;
    flex-direction: row;
`;

export const StyledFloatingButton = styled.TouchableOpacity`
    background-color: ${colors.white};
    padding: 10px 15px;
    height: 40px;
    border-radius: 70px;
    align-items: center;
    justify-content: center;
    position: absolute; 
    right: 10px; 
    bottom: 90px;
    elevation: 5;
`;

export const LabelView = styled.Text`
    background-color: ${colors.mainColor};
    padding: 5px 10px;
    border-radius: 15px;
`;


export const BGOverlvay = styled.View`
    height: 100%;
    width: 100%;
    flex:1;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    ${(props) => props.full ? ` z-index: 1;
    justify-content: center;
    height: ${windowHeight}px;
    width: ${windowWidth}px;` : ``}
   
  
`;

