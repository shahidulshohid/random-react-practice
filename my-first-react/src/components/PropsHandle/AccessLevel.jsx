import PropTypes from 'prop-types';
const AccessLevel = (props) => {
    const access = props.isAdmin ? 'Admin' : 'User'
    return <p>You have access level: {access}</p>
};

AccessLevel.propTypes = {
    isAdmin:PropTypes.bool.isRequired,
}
export default AccessLevel;