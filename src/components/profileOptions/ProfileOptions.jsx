import classes from './ProfileOptions.module.css';
import { Link } from 'react-router-dom';

const ProfileOptions = () => {
  return (
    <div className={classes.profileOptions}>
      <Link to='/profile/Adil'  className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Profile</button></Link>
      <Link to='/profile/Adil'  className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Update</button></Link>
      <Link to='/profile/Adil'  className={classes.profileOptionsLink} ><button className={`${classes.profileOptionButton} ${classes.logoutButton}`}>Logout</button></Link>
    </div>
  );
}

export default ProfileOptions;