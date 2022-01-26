import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './constants';
import RootNav from './RootNav';
import {QuestionScreen} from './screens/Question/QuestionScreen';
import {useIsDarkMode} from './hooks/useIsDarkMode';
import {Themes} from './config';

const Stack = createStackNavigator();

const MainStackNav = () => {
  const isDarkMode = useIsDarkMode();

  const headerStyle = {
    backgroundColor: isDarkMode
      ? Themes.darkTheme.colors.background
      : Themes.lightTheme.colors.background,
  };

  return (
    <Stack.Navigator screenOptions={{headerStyle}}>
      <Stack.Screen
        name={Routes.Root}
        component={RootNav}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Routes.Question} component={QuestionScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNav;
