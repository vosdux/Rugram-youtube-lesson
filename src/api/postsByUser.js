import { makeRequest } from "./makeRequest";

const URL = '/postsByUser';

export const getPostsByUser = (config) => {
    config.url = `${URL}${config.url}`

    return makeRequest({
        method: 'GET',
        ...config
    });
};


export const mutatePosts = (config) => {
    config.url = `${URL}${config.url}`;

    return makeRequest({
        method: 'PUT',
        ...config,
    });
};
