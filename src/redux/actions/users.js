import { api } from "../../api";
import { getAuthorizedUserFailed, getAuthorizedUserStarted, getAuthorizedUserSuccess, getUserFailed, getUserStarted, getUserSuccess } from "../actionCreators/users";

export const getUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(getUserStarted());

            const response = await api.users.getUser(id);

            dispatch(getUserSuccess(response.data));
        } catch (error) {
            dispatch(getUserFailed(error));
        }
    };
};

export const getAuthorizedUser = () => {
    return async (dispatch) => {
        try {
            dispatch(getAuthorizedUserStarted());
            const response = await api.users.getUser(1);

            dispatch(getAuthorizedUserSuccess(response.data));

        } catch (error) {
            dispatch(getAuthorizedUserFailed(error));
        }
    };
};
