import { Themes } from "../config";
import { useIsDarkMode } from "./useIsDarkMode";

export const useAppTheme = () => {
	const isDarkMode = useIsDarkMode();

	const getTheme = () => {
		if (isDarkMode) {
			return Themes.darkTheme;
		}

		return Themes.lightTheme;
	}
	

	return getTheme();
}