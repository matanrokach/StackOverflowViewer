import {createSlice} from '@reduxjs/toolkit';


export interface ISettingsState {
  darkMode: boolean | null;
}

const initialState: ISettingsState = {
  darkMode: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {
  setDarkMode,
} = settingsSlice.actions;

export const selectIsDarkMode = (state: {settings: ISettingsState}) =>
  state.settings.darkMode;


export default settingsSlice.reducer;
