import classes from "./UserItem.module.css";
import { Link } from 'react-router-dom';
import ProfilePicture from '../profilePicture/ProfilePicture';

const FollowUser = (props) => {
  const { _id: userId, hasProfilePicture, profilePictureLink, username } = props.user;
  return (
    <Link to={`/profile/${userId.toString()}`} className={classes.userInfo}>
      <ProfilePicture user={{hasProfilePicture, profilePictureLink}}/>
      <span>{username.toUpperCase()}</span>
    </Link>
  );
};

export default FollowUser;
