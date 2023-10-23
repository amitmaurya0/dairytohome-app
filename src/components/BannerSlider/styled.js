import styled from "styled-components/native";


export const Dot = styled.View`
  width: ${props => (props.active ? '25px' : '10px')};
  height: 3px;
  border-radius: 5px;
  background-color: #333;
  margin: 0 5px;
`;

export const DotContainer = styled.View`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: -15px;
    align-self: center;
    margin-bottom: 20px;

`;

export const ImageItemContainer = styled.View`
   height: 170px; 
   border-radius: 15px; 
   shadow-color: '#333'; 
   shadow-opacity: 0.25; 
   shadow-radius: 3.84px;
   elevation: 2;
   padding: 1px;
`;