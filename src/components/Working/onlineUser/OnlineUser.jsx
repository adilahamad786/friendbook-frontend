import classes from "./OnlineUser.module.css";
import ProfilePicture from '../../profilePicture/ProfilePicture';

const user = {
  "_id": "63b3ad0c41798b645b5ce63d",
  "username": "mira",
  "hasProfilePicture": true
}


export const OnlineUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture user={user}/>
        <div className={classes.online}></div>
        <span>{props.user.name}</span>
      </div>
    </div>
  );
};

export default OnlineUser;
