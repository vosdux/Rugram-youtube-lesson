import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Modal from 'react-modal';
import Comment from '../Comment';
import TextArea from '../TextArea';
import UserBadge from '../UserBadge';
import ImageWithLoader from '../ImageWithLoader';

import './styles.css'

const PhotoModal = ({ 
    commentValue,
    setCommentValue,
    onCommentSubmit,
    isCommentLoading,
    isOpen,
    onClose,
    imgUrl,
    userName,
    avatarUrl,
    userId,
    comments,
    isLikedByYou,
    onLikeClick
}) => {

    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.classList.add('cnBodyOverflow');
        } else {
            body.classList.remove('cnBodyOverflow');
        }

    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="cnModal"
            overlayClassName="cnModalOverlay"
            ariaHideApp={false}
        >
            <div className="cnModalRoot">
                <div className="cnModalImgWrapper">
                    <ImageWithLoader src={imgUrl} alt={imgUrl} className="cnModalImg" />
                </div>
                <div className="cnModalCommentsBlock">
                    <div>
                        <div className="cnModalHeader">
                            <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
                        </div>

                        <div className="cnModalComments">
                            {comments.map(comment => <Comment key={nanoid()} {...comment} />)}
                        </div>
                    </div>

                    <div>
                        <div className="cnModalIcons">
                            <i onClick={onLikeClick} className={`${isLikedByYou ? 'fa' : 'far'} fa-heart cnModalLikeIcon`} />
                        </div>
                        <TextArea
                            value={commentValue}
                            onChange={setCommentValue}
                            placeholder='Введите комментарий'
                            buttonText="Отправить"
                            onSubmit={onCommentSubmit}
                            isLoading={isCommentLoading}
                        />
                    </div>
                </div>
            </div>

        </Modal>
    );
};

export default PhotoModal;
