import { useState } from 'react';
import cn from 'classnames';
import './styles.css';
import PhotoModal from '../PhotoModal';

const Card = ({ imgUrl, className, likes, comments, isLikedByYou, onLikeClick, onCommentSubmit, id, userData, isMutateLoading }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [comment, setComment] = useState('')
    return (
        <div className={cn("cnCardRoot", className)}>
            <img src={imgUrl} alt={imgUrl} className="cnCardImage"/>
            <div className='cnCardHover' />
            <div className='cnCardIcons'>
                <i className={cn(`${isLikedByYou ? 'fa' : 'far'} fa-heart`, 'cnCardIcon')} onClick={onLikeClick} />
                <span className='cnCardNumber cnCardLikes'>{likes}</span>
                <i className={cn('fas fa-comment', 'cnCardIcon')} onClick={() => setModalVisible(true)} />
                <span className='cnCardNumber'>{comments.length}</span>
            </div>
            <PhotoModal
                comments={comments}
                isOpen={isModalVisible}
                onClose={() => setModalVisible(false)}
                {...userData}
                commentValue={comment}
                setCommentValue={setComment}
                onCommentSubmit={() => onCommentSubmit(comment)}
                isCommentLoading={isMutateLoading}
                imgUrl={imgUrl}
                isLikedByYou={isLikedByYou}
                onLikeClick={() => onLikeClick(id)}
            />
        </div>
    );
};

export default Card;
