import classes from './RemoveButton.module.css';
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { useContext, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { rightbarUpdateActions } from '../../store/rightbarUpdateSlice';

const FriendButton = (props) => {
  const { token, setLogedOut } = useContext(AuthContext);
  const [removed, setRemoved] = useState(false);
  const {error: sendFollowUnfollowRequestError , sendRequest: sendFollowUnfollowRequest } = useHttp();
  const dispatch = useDispatch();

  const clickHandler = () => {
    sendFollowUnfollowRequest({
      url : `/api/user/remove/${props.userId}`,
      method : "PUT",
      headers : {
        Authorization : token
      }
    }, (resData) => {
      setRemoved(resData.removed);
      dispatch(rightbarUpdateActions.update());
    })
  }

  useEffect(() => {
    if (sendFollowUnfollowRequestError) {
      alert(sendFollowUnfollowRequestError.message)
      if (sendFollowUnfollowRequestError.errorType === "unauthorized") {
        setLogedOut()
      }
    }
  }, [sendFollowUnfollowRequestError, setLogedOut]);

  return (
    <button onClick={clickHandler} disabled={removed} className={`${classes.btn} ${removed ? classes.removed : ""}`}>{ removed ? "Removed" : "Remove"}</button>
  );
}

export default FriendButton;