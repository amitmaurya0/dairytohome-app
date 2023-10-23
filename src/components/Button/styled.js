import styled from 'styled-components/native';
import fonts from '../../configs/fonts';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props => props.loading ? 'grey' : 'black'};
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    ${props => props.full ? 'flex: 1' : ''};
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: ${fonts.bold};
    font-size: 16px;
`;