import reducer, { getQuestions, getQuestionsFailure, getQuestionsSuccess, getUserDetailsSuccess, getUserWithQuestions, IUserState } from '../userSlice'
import { mockQuestionsResponse, mockUserResponse } from '../mockResponse';
import { createStore } from '@reduxjs/toolkit';
import userSlice from '../userSlice';

describe('userSlice', () => {

	it('should return isLoading true', () => {
		const previousState = {
			userDetails: {},
			questions: [],
			error: '',
			isLoading: false,
		};

		const nextState = {
			userDetails: {},
			questions: [],
			error: '',
			isLoading: true,
		};

		expect(reducer(previousState, getQuestions())).toEqual(nextState);

	})
	
	it('should return the correct state from loading to success', () => {
		const questions = [...mockQuestionsResponse.items];

		const previousState = {
			userDetails: {},
			questions: [],
			error: '',
			isLoading: true,
		};

		const nextState = {
			userDetails: questions[0].owner,
			questions,
			error: '',
			isLoading: false,
		};

		expect(reducer(previousState, getQuestionsSuccess({ user: questions[0].owner, questions }))).toEqual(nextState);

	})
	
	it('should return the correct state from loading to success for user with no questions', () => {
		const user = {...mockUserResponse.items[0]};

		const previousState = {
			userDetails: {},
			questions: [],
			error: '',
			isLoading: true,
		};

		const nextState = {
			userDetails: user,
			questions: [],
			error: '',
			isLoading: false,
		};

		expect(reducer(previousState, getUserDetailsSuccess({ user }))).toEqual(nextState);

	})
	
	it('should return error', () => {
		const error = 'User not found';

		const previousState = {
			userDetails: {},
			questions: [],
			error: '',
			isLoading: false,
		};

		const nextState = {
			userDetails: {},
			questions: [],
			error,
			isLoading: false,
		};

		expect(reducer(previousState, getQuestionsFailure({error}))).toEqual(nextState);

	})

})