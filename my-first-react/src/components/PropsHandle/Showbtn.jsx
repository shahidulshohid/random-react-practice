
import PropTypes from 'prop-types';
const Showbtn = (props) => {
   return (
    props.isShowBtn && <button> Click me</button>
   )
};

Showbtn.propTypes = {
    isShowBtn:PropTypes.bool.isRequired,
}

export default Showbtn;