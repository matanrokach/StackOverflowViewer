 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomeScreen from './screens/Home/HomeScreen';
 import { SettingsScreen } from './screens/Settings/SettingsScreen';
import { Routes } from './constants';
import { useIsDarkMode } from './hooks/useIsDarkMode';
import { Themes } from './config';
import HomeIcon from './assets/svgs/search.svg';
import SettingsIcon from './assets/svgs/settings.svg';
import { useTheme } from '@react-navigation/native';

const icons = {
	[Routes.Home]: HomeIcon,
	[Routes.Settings]: SettingsIcon,
}
 
 const Tab = createBottomTabNavigator();
 
 const RootNav = () => {

	const isDarkMode = useIsDarkMode();
	const colors = useTheme();

	const headerStyle = {
		backgroundColor: isDarkMode ? Themes.darkTheme.colors.background : Themes.lightTheme.colors.background,
	}
	
	const tabBarStyle = {
		backgroundColor: isDarkMode ? Themes.darkTheme.colors.background : Themes.lightTheme.colors.background,
	}

	 return (
			<Tab.Navigator screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					const Icon = icons[route.name]

					return <Icon width={size} height={size} fill={color} />;
				},
				tabBarActiveTintColor: colors.colors.primary,
				tabBarInactiveTintColor: 'gray',
				headerStyle, tabBarStyle,
			})}>
				<Tab.Screen name={Routes.Home} component={HomeScreen} />
				<Tab.Screen name={Routes.Settings} component={SettingsScreen} />
			</Tab.Navigator>
	 );
 };
 
 export default RootNav;
 