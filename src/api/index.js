import { getPhotos, mutatePhoto } from './photos';
import { getUser, mutateUser } from './users';
import { getPostsByUser, mutatePosts } from './postsByUser';

export const api = {
    photos: {
        getPhotos,
        mutatePhoto,
    },
    users: {
        getUser,
        mutateUser,
    },
    postsByUser: {
        getPostsByUser,
        mutatePosts,
    },
};
