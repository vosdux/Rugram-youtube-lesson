import { useState } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import Comment from '../Comment';
import UserBadge from '../UserBadge';
import PhotoModal from '../PhotoModal';
import TextArea from '../TextArea';
import ImageWithLoader from '../ImageWithLoader';

import './styles.css';


const DetailedCard = ({
    userName,
    avatarUrl,
    userId,
    imgUrl,
    likes,
    isLikedByYou,
    comments,
    className,
    onLikeClick,
    id,
    onCommentSendClick,
    mutateLoading,
}) => {
    const [isCommentsShown, setIsCommentsShown] = useState(false);
    const [comment, setComment] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSendCommentClick = () => {
        if (comment) {
            onCommentSendClick(id, comment);
            setComment('');
        }
    };

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentsCopy = [...comments];
            const commentForRender = commentsCopy.splice(comments.length - 2, 2);

            return (
                <>
                    <span className="cnDetailedCardCommentTitle" onClick={() => setIsCommentsShown(true)}>{`Показать еще ${comments.length - commentForRender.length} комментариев`}</span>
                    {commentForRender.map((comment) => <Comment {...comment} key={nanoid()} />)}
                </>
            )
        }

        return comments.map((comment) => <Comment {...comment} key={nanoid()} />)
    };

    const onCloseModal = () => {
        setComment('')
        setIsModalVisible(false);
    };

    const onOpenModal = () => {
        setComment('')
        setIsModalVisible(true);
    }

    return (
        <div className={cn("cnDetailedCardRoot", className)}>
            <div className="cnDetailedCardHeader">
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
            </div>
            <div className='cnDetailedCardImgWrapper'>
                <ImageWithLoader className="cnDetailedCardImg" src={imgUrl} alt="img" />
            </div>
            <div className="cnDetailedCardButtons">
                <i onClick={() => onLikeClick(id)} className={`${isLikedByYou ? 'fas' : 'far'} fa-heart cnDetailedCardLikeIcon`} />
                <i className="fas fa-comment cnDetailedCardLikeComment" onClick={onOpenModal} />
            </div>
            <div className="cnDetailedCardLikes">
                {`Оценили ${likes} человек`}
            </div>
            <div className="cnDetailedCardComments">
                {renderComments()}
            </div>
            <TextArea
                value={comment}
                onChange={setComment}
                placeholder='Введите комментарий'
                isLoading={mutateLoading}
                onSubmit={handleSendCommentClick}
                buttonText="Отправить"
            />
            <PhotoModal
                comments={comments}
                isOpen={isModalVisible}
                onClose={onCloseModal}
                userName={userName}
                avatarUrl={avatarUrl}
                userId={userId}
                commentValue={comment}
                setCommentValue={setComment}
                onCommentSubmit={handleSendCommentClick}
                isCommentLoading={mutateLoading}
                imgUrl={imgUrl}
                isLikedByYou={isLikedByYou}
                onLikeClick={() => onLikeClick(id)}
            />
        </div>
    );
};

export default DetailedCard;