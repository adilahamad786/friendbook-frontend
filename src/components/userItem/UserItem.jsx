import classes from "./UserItem.module.css";
import { Link } from 'react-router-dom';
import ProfilePicture from '../profilePicture/ProfilePicture';

const FollowUser = (props) => {
  return (
    <Link to={`/profile/${props.user._id.toString()}`} className={classes.userInfo}>
      <ProfilePicture user={props.user}/>
      <span>{props.user.username.toUpperCase()}</span>
    </Link>
  );
};

export default FollowUser;
