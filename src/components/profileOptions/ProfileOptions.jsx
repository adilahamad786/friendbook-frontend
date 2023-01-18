import classes from './ProfileOptions.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useEffect, useContext } from 'react';
import useHttp from '../../hooks/useHttp';
import { useSelector } from "react-redux";

const ProfileOptions = (props) => {
  const { token, setLogedOut } = useContext(AuthContext);
  const { _id: userId } = useSelector(state => state.user);
  const { error, sendRequest: logout } = useHttp();

  const onLogoutHandler = () => {
    logout({ 
      url : '/api/user/logout',
      headers : {
        Authorization : token
      }
    }, (res) => { setLogedOut() });
  }

  useEffect(() => {
    if (error) {
      alert(error);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);

  return (
    <div className={classes.profileOptions}>
      <Link to={`/profile/${userId}`} onClick={props.onClose} className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Profile</button></Link>
      <Link to='/profile/update' onClick={props.onClose} className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Update</button></Link>
      <Link to='/login' onClick={onLogoutHandler} className={classes.profileOptionsLink} ><button className={`${classes.profileOptionButton} ${classes.logoutButton}`}>Logout</button></Link>
    </div>
  );
}

export default ProfileOptions;