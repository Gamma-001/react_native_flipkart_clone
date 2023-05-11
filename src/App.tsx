import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootNavigator from './navigators/RootNavigator/RootNavigator';

import store from './store';

export default function App(): JSX.Element {
  return (
    <Provider store = { store }>
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
}