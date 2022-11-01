import { combineReducers } from "redux";
import { photosReducer } from "./photos";

export const rootReducer = combineReducers({
    photos: photosReducer,
});
