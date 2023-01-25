import classes from './ProfilePicture.module.css';
import noProfilePicture from '../../assets/noProfilePicture.png';


const ProfilePicture = (props) => {
  const {hasProfilePicture, profilePictureLink} = props.user;
  return (
    <img className={classes.profile} src={hasProfilePicture ? profilePictureLink : noProfilePicture } alt="ProfilePicture" />
  );
}

export default ProfilePicture;