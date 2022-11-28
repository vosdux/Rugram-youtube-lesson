import { makeRequest } from "./makeRequest";

const URL = '/users';

export const getUser = (userId, config) => makeRequest({
    method: 'GET',
    url: `${URL}/${userId}`,
    ...config,
});

export const mutateUser = (config) => {
    config.url = `${URL}${config.url}`;

    return makeRequest({
        method: 'PUT',
        ...config,
    });
};
