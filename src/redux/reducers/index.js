import { combineReducers } from "redux";
import { photosReducer } from "./photos";
import { postsByUserReducer } from "./postsByUser";
import { usersReducer } from "./users";

export const rootReducer = combineReducers({
    photos: photosReducer,
    users: usersReducer,
    postsByUser: postsByUserReducer,
});
