import classes from "./OnlineUser.module.css";
import ProfilePicture from '../profilePicture/ProfilePicture';

export const OnlineUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture image={props.user.img}/>
        <div className={classes.online}></div>
        <span>{props.user.name}</span>
      </div>
    </div>
  );
};

export default OnlineUser;
