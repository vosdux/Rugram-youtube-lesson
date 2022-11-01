import { makeRequest } from "./makeRequest";


const URL = '/posts';

export const getPhotos = (config) => makeRequest({
    method: 'GET',
    url: URL,
    ...config,
});
