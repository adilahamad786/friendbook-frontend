import classes from "./FollowUser.module.css";
import Button from "../button/Button";
import ProfilePicture from '../profilePicture/ProfilePicture';

const FollowUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture image={props.user.img}/>
        <span>{props.user.name}</span>
      </div>
      <Button title="Follow" />
    </div>
  );
};

export default FollowUser;
