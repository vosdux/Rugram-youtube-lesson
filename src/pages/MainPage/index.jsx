import { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import DetailedCard from "../../components/DetailedCard";
import Layout from "../../components/Layout";
import { getPhotos } from "../../redux/actions/photos";
import './styles.css';

const MainPage = () => {
    const photos = useSelector(state => state.photos.photos);
    const loading = useSelector(state => state.photos.isPhotosLoading);
    const total = useSelector(state => state.photos.totalPhotos);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPhotos(page));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const nextHandler = () => {
        setPage(page + 1);
    };

    return (
        <Layout nickName="Artem" id="">
            <div className="cnMainPageRoot">
                {loading ? (<div className="cnMainLoaderContainer">
                    <Bars color="#000BFF" height={80} width={80} />
                </div>) :
                    <InfiniteScroll
                        dataLength={photos.length}
                        next={nextHandler}
                        hasMore={photos.length < total}
                        loader={<div className="cnMainLoaderContainer">
                            <Bars color="#000BFF" height={15} width={15} />
                        </div>}
                        endMessage={
                            <p className="cnMainLoaderContainer">Thats all!</p>
                        }
                    >
                        {photos.map(({ author, imgUrl, id, likes, comments }) => (
                            <DetailedCard
                                key={id}
                                userName={author.nickname}
                                userId={author.id}
                                avatarUrl={author.avatarUrl}
                                imgUrl={imgUrl}
                                likes={likes.length}
                                isLikedByYou={true}
                                comments={comments}
                                className="cnMainPageCard"
                            />
                        ))}
                    </InfiniteScroll>}
            </div>
        </Layout>
    );
};

export default MainPage;