import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../features/settings/settingsSlice";

export const useIsDarkMode = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const isDarkModeLocal = useSelector(selectIsDarkMode);

	const getIsDarkMode = () => {
		if (typeof isDarkModeLocal === 'boolean') {
			return isDarkModeLocal;
		}

		return isDarkMode;
	}
	

	return getIsDarkMode();
}