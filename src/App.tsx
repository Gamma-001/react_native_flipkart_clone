import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import FlipkartScreen from './navigators/Flipkart/Flipkart';

import store from './store';

export default function App(): JSX.Element {
  return (
    <Provider store = { store }>
    <NavigationContainer>
        <FlipkartScreen />
    </NavigationContainer>
    </Provider>
  );
}