import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {SOAPI} from '../../services';
import {mockResponse} from './mockResponse';

const mockData = mockResponse;

export interface IUserState {
  userDetails: Partial<IQuestionOwner> | Partial<IUser>;
  questions: IUserQuestion[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  userDetails: {},
  questions: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getQuestions: state => {
      state.userDetails = {};
      state.questions = [];
      state.error = '';
      state.isLoading = true;
    },
    getQuestionsSuccess: (state, action) => {
      state.userDetails = action.payload.user;
      state.questions = action.payload.questions;
      state.isLoading = false;
    },
    getQuestionsFailure: (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    },
    getUserDetails: state => {
      state.userDetails = {};
      state.questions = [];
      state.error = '';
      state.isLoading = true;
    },
    getUserDetailsSuccess: (state, action) => {
      state.userDetails = action.payload.user;
      state.questions = [];
      state.isLoading = false;
    },
    getUserDetailsFailure: (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export const {
  getQuestions,
  getQuestionsSuccess,
  getQuestionsFailure,
  getUserDetails,
  getUserDetailsSuccess,
  getUserDetailsFailure,
} = userSlice.actions;

export const selectUserDetails = (state: {user: IUserState}) =>
  state.user.userDetails;
export const selectIsLoadingDetails = (state: {user: IUserState}) =>
  state.user.isLoading;
export const selectDetailsError = (state: {user: IUserState}) =>
  state.user.error;
export const selectQuestions = (state: {user: IUserState}) =>
  state.user.questions;

export default userSlice.reducer;

const getUser = async (userId: number) => {
  try {
    const response = await SOAPI.fetchUserById(userId);

    const user = response.data.items.find(
      (item: IUser) => item.user_id === userId,
    );

    if (!user) {
      return {error: 'User not found'};
    } else {
      return {user};
    }
  } catch (error) {
    return {error};
  }
};

export const getUserWithQuestions =
  (userId: number) => async (dispatch: Dispatch) => {
    try {
      dispatch(getQuestions());
      const response = await SOAPI.fetchQuestionsByUserId(userId);

      const questions = response.data.items.filter(
        (item: IUserQuestion) => item.owner.user_id === userId,
      );

      if (!questions) {
        return dispatch(getQuestionsFailure({error: 'User not found'}));
      }

      if (questions.length) {
        return dispatch(
          getQuestionsSuccess({user: questions[0].owner, questions}),
        );
      }

      const user = await getUser(userId);

      if (user) {
        return dispatch(getUserDetailsSuccess({user}));
      }

      dispatch(getUserDetailsFailure({error: 'User not found'}));
    } catch (error) {
      dispatch(getQuestionsFailure({error}));
    }
  };
