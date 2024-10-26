
import PropTypes from 'prop-types';
import ActiveUser from './ActiveUser';
import InActiveUser from './InActiveUser';
const UserSataus = ({isActive, toggle}) => {
    return (
        <div>
            <button className={isActive? 'active': 'btn'} onClick={toggle}>Toggle</button>
            {
                isActive ? <ActiveUser></ActiveUser>:<InActiveUser></InActiveUser>
            }
        </div>
    );
};
UserSataus.propTypes = {
    isActive:PropTypes.bool.isRequired,
    toggle:PropTypes.func.isRequired,
}
export default UserSataus;