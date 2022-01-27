import { DefaultTheme, Theme } from "@react-navigation/native";
import { Colors } from "../constants";


interface ITheme extends Theme {
	dark: boolean;
	colors: {
		background: string;
		text: string;
		border: string;
		primary: string;
		card: string;
		notification: string;
		error: string;
		disabled: string;
		disabledText: string;
		[key: string]: string;
	}
}

const darkTheme: ITheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: Colors.Black,
		text: Colors.White,
		border: Colors.White,
		primary: Colors.White,
		error: Colors.Red,
		disabled: Colors.Gray3,
		disabledText: Colors.Gray3,
	}
};

const lightTheme: ITheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: Colors.White,
		text: Colors.Black,
		border: Colors.Black,
		primary: Colors.Black,
		error: Colors.Red2,
		disabled: Colors.Gray2,
		disabledText: Colors.Gray2,
	}
};

export const Themes = {
	darkTheme,
	lightTheme,
}