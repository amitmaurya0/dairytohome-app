/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './src'
import {Provider} from 'react-redux'
import {store} from './src/store/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler';



function App() {
 
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}


export default App;
