
import PropTypes from 'prop-types';
const LoadingState = (props) => {
    const content = props.isLoading ? <p>Loading....</p> : <p>Content loaded</p>
    return (
        <div>{content}</div>
    )
};

LoadingState.propTypes = {
    isLoading:PropTypes.bool.isRequired,
}

export default LoadingState;