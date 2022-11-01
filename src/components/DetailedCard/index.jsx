import { useState } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import Comment from '../Comment';
import UserBadge from '../UserBadge';

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
}) => {
    const [isCommentsShown, setIsCommentsShown] = useState(false);

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

    return (
        <div className={cn("cnDetailedCardRoot", className)}>
            <div className="cnDetailedCardHeader">
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
            </div>
            <div>
                <img src={imgUrl} alt="img" className='cnDetailedCardImg' />
            </div>
            <div className="cnDetailedCardButtons">
                <i className={`${isLikedByYou ? 'fas' : 'far'} fa-heart cnDetailedCardLikeIcon`} />
                <i className="fas fa-comment cnDetailedCardLikeComment" />
            </div>
            <div className="cnDetailedCardLikes">
                {`Оценили ${likes} человек`}
            </div>
            <div className="cnDetailedCardComments">
                {renderComments()}
            </div>
            <textarea className='cnDetailedCardTeaxtArea' />
        </div>
    );
};

export default DetailedCard;