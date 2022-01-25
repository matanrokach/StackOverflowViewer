import axios, { AxiosAdapter, AxiosResponse } from "axios";

interface IAxiosParams {
	[key: string]: any;
}

interface IAxiosData {
	[key: string]: any;
}

// https://api.stackexchange.com/2.3/users?order=desc&site=stackoverflow&id=1264804

const baseURL = 'https://api.stackexchange.com/';
const apiVersion = '2.3';

const defaultParams = {
	site: 'stackoverflow',
}

const api = axios.create({
  baseURL: `${baseURL}/${apiVersion}`,
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

const get = <T>(path: string, params: IAxiosParams): Promise<AxiosResponse<T>> => {
	return api.get<T>(path, { params: { ...defaultParams, ...params } });
}

const post = <T>(path: string, data: IAxiosData) => {
	return api.post<T>(path, { ...defaultParams, ...data });
}

const put = <T>(path: string, data: IAxiosData) => {
	return api.put<T>(path, { ...defaultParams, ...data });
}

const patch = <T>(path: string, data: IAxiosData) => {
	return api.patch<T>(path, { ...defaultParams, ...data });
}

const del = <T>(path: string) => {
	return api.delete<T>(path);
}

export default {
	get,
	post,
	put,
	patch,
	delete: del,
}
