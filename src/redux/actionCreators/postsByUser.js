export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS__FAILED = 'GET_POSTS__FAILED';
export const GET_POSTS__STARTED = 'GET_POSTS__STARTED';

export const getPostsSuccess = (posts) => {
    return ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})};

export const getPostsFailed = (error) => ({
    type: GET_POSTS__FAILED,
    payload: error,
});

export const getPostsStarted = () => ({
    type: GET_POSTS__STARTED,
});
