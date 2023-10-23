import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { MainView } from './styled';

const View = ({  children, gradient, blue}) => {
    const styles = {};
    if(gradient) {
        styles.backgroundImage = 'linear-gradient(to right, #ff0000, #0000ff)'
    }
    return(
        <MainView style={styles}>
            
            { children}
        </MainView>
    )
}

export default View;