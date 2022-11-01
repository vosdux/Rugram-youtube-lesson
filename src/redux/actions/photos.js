import { api } from "../../api";
import { getPhotosFailed, getPhotosStarted, getPhotosSuccess, setPhotosTotal } from "../actionCreators/photos"

export const getPhotos = (page = 1) => {
    return async (dispatch, getState) => {
        try {
            const store = getState();
            if (page === 1) {
                dispatch(getPhotosStarted());
            }

            const response = await api.photos.getPhotos({
                params: {
                    _page: page,
                    _limit: 5,
                },
            });

            if (page === 1) {
                dispatch(setPhotosTotal(response.headers["x-total-count"]));
                dispatch(getPhotosSuccess([...response.data]));
            } else {
                dispatch(getPhotosSuccess([...store.photos.photos, ...response.data]));
            }
        } catch (error) {
            dispatch(getPhotosFailed(error));
        }
    };
};
