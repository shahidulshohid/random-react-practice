
import PropTypes from 'prop-types';
const PropsHandle = ({isLoggedIn, username}) => {
    if(isLoggedIn){
        return <p>Welcome back, {username}</p>
    }else{
        return <p>Please log in to see your messages.</p>
    }
};

PropsHandle.propTypes = {
    isLoggedIn:PropTypes.bool.isRequired,
    username:PropTypes.string.isRequired
}

export default PropsHandle;