import { GET_POSTS_SUCCESS, GET_POSTS__FAILED, GET_POSTS__STARTED } from "../actionCreators/postsByUser";

const initialState = {
    posts: [],
    isPostsLoading: true,
    isPostsError: false,
};

export const postsByUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS__STARTED:
            return {
                ...state,
                isPostsLoading: true,
            };

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isPostsLoading: false,
                isPostsError: false,
                posts: action.payload,
            };

        case GET_POSTS__FAILED:
            return {
                ...state,
                isPostsLoading: false,
                isPostsError: true,
            };

        default:
            return {
                ...state,
            };
    }
};
