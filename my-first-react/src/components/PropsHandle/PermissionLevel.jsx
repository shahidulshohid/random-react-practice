import PropTypes from "prop-types";
const PermissionLevel = ({ permissionLevel }) => {
  //   let message;

  //   switch (permissionLevel) {
  //     case "success":
  //       message = "অপারেশন সফল হয়েছে!";
  //       break;
  //     case "error":
  //       message = "একটি ত্রুটি ঘটেছে।";
  //       break;
  //     case "loading":
  //       message = "লোড হচ্ছে...";
  //       break;
  //     default:
  //       message = "অজানা অবস্থা।";
  //   }
  //   return <div>{message}</div>;
  //================================

  switch (permissionLevel) {
    case "read":
      return <p>You can red.</p>;
    case "write":
      return <p>You can red and write</p>;
      case 'error':
      return <p>You can not read and write anything</p>
    default:
      return <p>No access</p>;
  }
};

PermissionLevel.propTypes = {
  permissionLevel: PropTypes.string.isRequired,
};

export default PermissionLevel;
