export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILED = 'GET_PHOTOS_FAILED';
export const GET_PHOTOS_STARTED = 'GET_PHOTOS_STARTED';
export const SET_PHOTOS_TOTAL = 'SET_PHOTOS_TOTAL';
export const MUTATE_PHOTO_SUCCESS = 'MUTATE_PHOTO_SUCCESS';
export const MUTATE_PHOTO_FAILED = 'MUTATE_PHOTO_FAILED';
export const MUTATE_PHOTO_STARTED = 'MUTATE_PHOTO_STARTED';

export const getPhotosSuccess = (photos) => ({
    type: GET_PHOTOS_SUCCESS,
    payload: photos,
});

export const getPhotosFailed = (error) => ({
    type: GET_PHOTOS_FAILED,
    payload: error,
});

export const getPhotosStarted = () => ({
    type: GET_PHOTOS_STARTED,
});

export const setPhotosTotal = (total) => ({
    type: SET_PHOTOS_TOTAL,
    payload: total,
});

export const mutatePhotoSuccess = () => ({
    type: MUTATE_PHOTO_SUCCESS,
});

export const mutatePhotoFailed = (error) => ({
    type: MUTATE_PHOTO_FAILED,
    payload: error,
});

export const mutatePhotoStarted = () => ({
    type: MUTATE_PHOTO_STARTED,
});
