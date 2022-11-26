import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import NoAccessPage from "../../pages/NoAccessPage";
import UserPage from "../../pages/UserPage";
import { getAuthorizedUser } from "../../redux/actions/users";
import './styles.css';

const authorizedRoutes = [
    { path: '/', element: <MainPage />, exact: true },
    { path: '/:id', element: <UserPage />, exact: true },
];


const PageRoutes = () => {
    const authorizedUser = useSelector(state => state.users.authorizedUser);
    const isLoading = useSelector(state => state.users.isAuthorizedUserLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthorizedUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <div className="cnPageRoutesLoader">
                <Bars color="#000BFF" width={80} height={80} />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                {authorizedUser ? authorizedRoutes.map((route) => <Route {...route} key={route.path} />) : <Route path="*" element={<NoAccessPage />} exact />}
            </Routes>
        </BrowserRouter>
    )
};

export default PageRoutes;
