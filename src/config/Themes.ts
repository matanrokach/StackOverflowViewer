import { DefaultTheme, Theme } from "@react-navigation/native";
import { Colors } from "../constants";

const darkTheme: Theme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: Colors.Black,
		text: Colors.White,
		border: Colors.White,
		primary: Colors.White,
	}
};

const lightTheme: Theme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: Colors.White,
		text: Colors.Black,
		border: Colors.Black,
		primary: Colors.Black,
	}
};

export const Themes = {
	darkTheme,
	lightTheme,
}