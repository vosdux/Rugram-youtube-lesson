import { makeRequest } from "./makeRequest";

const URL = '/users';

export const getUser = (userId, config) => makeRequest({
    method: 'GET',
    url: `${URL}/${userId}`,
    ...config,
});
