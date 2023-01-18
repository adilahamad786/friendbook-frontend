import classes from "./FriendSection.module.css";
import Cart from "../cart/Cart";
import { useState, useEffect, useContext } from 'react';
import useHttp from "../../hooks/useHttp";
import { useSelector } from "react-redux";
import AuthContext from "../../context/AuthContext";
import FriendItem from "../friendItem/FriendItem";

const FriendSection = () => {
  const [friends, setFriends] = useState([]);
  const { _id : userId } = useSelector(state => state.user);
  const { token, setLogedOut } = useContext(AuthContext);
  const { error, sendRequest: fetchFriends} = useHttp();
  const reload = useSelector(state => state.rightbarUpdate.updateCounter);

  useEffect(() => {
    fetchFriends({
      url : `/api/user/friends/${userId}`,
      headers : {
        Authorization : token
      }
    }, (friendList) => setFriends(friendList));
  }, [token, fetchFriends, setFriends, userId, reload]);

  useEffect(() => {
    if (error) {
      alert(error.message);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);

  return (
    <Cart title="User Friends">
      {friends.map((user) => {
        return <FriendItem key={user._id} user={user} />;
      })}
      {
        friends.length === 0 && <span className={classes.noFriend}>Friends Not Found!</span>
      }
    </Cart>
  );
};

export default FriendSection;
