import { makeRequest } from "./makeRequest";

const URL = '/posts';

export const getPhotos = (config) => makeRequest({
    method: 'GET',
    url: URL,
    ...config,
});

export const mutatePhoto = (config) => {
    config.url = `${URL}${config.url}`;

    return makeRequest({
        method: 'PUT',
        ...config
    });
};
