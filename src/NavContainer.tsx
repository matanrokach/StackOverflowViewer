import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { Themes } from "./config";
import { Colors } from "./constants";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { useIsDarkMode } from "./hooks/useIsDarkMode";
import MainStackNav from "./MainStackNav";


const NavContainer = ({}) => {

	const isDarkMode = useIsDarkMode();
	
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.Black : Colors.White,
		flex: 1,
  };

	return (
		<NavigationContainer theme={isDarkMode ? Themes.darkTheme : Themes.lightTheme}>
			<SafeAreaView style={backgroundStyle}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<MainStackNav />
			</SafeAreaView>
		</NavigationContainer>
	);
}

export default NavContainer