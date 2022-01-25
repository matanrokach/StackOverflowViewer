import SOClient from "./SOClient";


const fetchUserById = (userId: number = 1264804) => {

	const params = {
		order: 'desc',
	};

	return SOClient.get<IUserDetailsResponse>(`/users/${userId}`, params);
}

const fetchQuestionsByUserId = (userId: number = 1264804) => {

	const params = {
		order: 'desc',
	};

	return SOClient.get<IUserQuestionResponse>(`/users/${userId}/questions`, params);
}


export const SOAPI = {
	fetchUserById,
	fetchQuestionsByUserId,
}