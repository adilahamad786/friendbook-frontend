import classes from "./FollowUser.module.css";
import RightbarButton from "../rightbarButton/RightbarButton";
import ProfilePicture from '../profilePicture/ProfilePicture';

const FollowUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture image={props.user.img}/>
        <span>{props.user.name}</span>
      </div>
      <RightbarButton title="Follow" />
    </div>
  );
};

export default FollowUser;
