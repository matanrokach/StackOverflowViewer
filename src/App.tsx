/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { store } from './app/store'
import { Provider, useSelector } from 'react-redux'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MainStackNav from './MainStackNav';
import { selectIsDarkMode } from './features/settings/settingsSlice';
import NavContainer from './NavContainer';

const App = ({}) => {

  return (
		<Provider store={store}>
			<NavContainer />
		</Provider>
  );
};

export default App;
