import classes from './ProfilePicture.module.css';
import noProfilePicture from '../../assets/noProfilePicture.png';


const ProfilePicture = (props) => {

  let profilePicture = `/api/user/profile-picture/${props.user._id.toString()}`;

  if (typeof props.user._id === "string") {
    profilePicture = `/api/user/profile-picture/${props.user._id}`;
  }

  return (
    <img className={classes.profile} src={props.user.hasProfilePicture ? profilePicture : noProfilePicture } alt="ProfilePicture" />
  );
}

export default ProfilePicture;