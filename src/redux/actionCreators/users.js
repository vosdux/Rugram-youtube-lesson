export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const GET_USER_STARTED = 'GET_USER_STARTED';
export const GET_AUTHORIZED_USER_SUCCEESS = 'GET_AUTHORIZED_USER_SUCCEESS';
export const GET_AUTHORIZED_USER_FAILED = 'GET_AUTHORIZED_USER_FAILED';
export const GET_AUTHORIZED_USER_STARTED = 'GET_AUTHORIZED_USER_STARTED';

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
});

export const getUserFailed = (error) => ({
    type: GET_USER_FAILED,
    payload: error,
});

export const getUserStarted = () => ({
    type: GET_USER_STARTED,
});

export const getAuthorizedUserSuccess = (user) => ({
    type: GET_AUTHORIZED_USER_SUCCEESS,
    payload: user,
});

export const getAuthorizedUserFailed = (error) => ({
    type: GET_AUTHORIZED_USER_FAILED,
    payload: error,
});

export const getAuthorizedUserStarted = () => ({
    type: GET_AUTHORIZED_USER_STARTED,
});


