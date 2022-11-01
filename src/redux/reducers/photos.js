import { GET_PHOTOS_FAILED, GET_PHOTOS_STARTED, GET_PHOTOS_SUCCESS, SET_PHOTOS_TOTAL } from "../actionCreators/photos"

const initialState = {
    photos: [],
    isPhotosLoading: true,
    totalPhotos: 0,
};

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_STARTED:
            return {
                ...state,
                isPhotosLoading: true,
            };

        case GET_PHOTOS_FAILED:
            return {
                ...state,
                isPhotosLoading: false,
            };

        
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isPhotosLoading: false,
            };

        case SET_PHOTOS_TOTAL:
            return {
                ...state,
                totalPhotos: action.payload,
            };

        default: {
            return {
                ...state
            };
        }
    }
};
