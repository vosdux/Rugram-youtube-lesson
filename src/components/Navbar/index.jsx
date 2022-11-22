import UserBadge from '../UserBadge';
import './styles.css';

const Navbar = ({
    nickName,
    avatarUrl,
    id,
}) => {
    return (
        <div className="cnNavbarRoot">
            <div className='cnNavbarWrapper'>
                <a href='/' className='cnNavbarLink'>Rugram</a>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
            </div>
        </div>
    );
};

export default Navbar;