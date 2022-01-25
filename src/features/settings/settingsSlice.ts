import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {SOAPI} from '../../services';
import {mockResponse} from './mockResponse';

const mockData = mockResponse;

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

// export const getSettingsFromStorage = (userId: number) => async (dispatch: Dispatch) => {
//   try {
//     dispatch(getUserDetails());
//     const response = await SOAPI.fetchUserById(userId);

//     const user = response.data.items.find(
//       (item: IUser) => item.user_id === userId,
//     );

//     if (!user) {
//       return dispatch(getUserDetailsFailure({error: 'User not found'}));
//     }
// console.log(">>> user", JSON.stringify(user, null, 2))
//     dispatch(getUserDetailsSuccess({user}));
//   } catch (error) {
//     dispatch(getUserDetailsFailure({error}));
//   }
// };

// export const setSettingsToStorage =
//   (userId: number) => async (dispatch: Dispatch) => {
//     try {
//       dispatch(getQuestions());
//       const response = await SOAPI.fetchQuestionsByUserId(userId);

//       const questions = response.data.items.filter(
//         (item: IUserQuestion) => item.owner.user_id === userId,
//       );

//       if (!questions) {
//         return dispatch(getQuestionsFailure({error: 'User not found'}));
//       }

// 			if (!questions.length) {
// 				return dispatch(getUser(userId));
// 			}
			
//       dispatch(getQuestionsSuccess({user: questions[0].owner, questions}));
//     } catch (error) {
//       dispatch(getQuestionsFailure({error}));
//     }
//   };
