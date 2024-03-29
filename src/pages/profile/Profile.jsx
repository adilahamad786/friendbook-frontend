import classes from "./Profile.module.css";
import ProfileSection from "../../components/profileSection/ProfileSection";
import SuggestionItem from "../../components/suggestionItem/SuggestionItem";
import Cart from "../../components/cart/Cart";
import UserPosts from "../../components/userPosts/UserPosts";
import { useState, useEffect, useContext } from "react";
import ShowContext from "../../context/ShowContext";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useSelector } from "react-redux";
import moveOnTop from "../../utils/moveOnTop";

const Profile = () => {
  // Move top of the page
  moveOnTop();

  const ShowCtx = useContext(ShowContext);
  const userId = useParams().id;
  const { token, setLogedOut } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const { error: fetchFriendsError, sendRequest: fetchFriends } = useHttp();
  const currentUserId = useSelector(state => state.user._id);

  const hasOtherUser = userId !== currentUserId;

  useEffect(() => {
    if (hasOtherUser) {
      fetchFriends({
        url : `/api/user/friends/${userId}`,
        headers : {
          Authorization : token
        }
      }, (resFriendList) => setFriends(resFriendList));
    }
  }, [hasOtherUser, fetchFriends, userId, token]);

  useEffect(() => {
    if (fetchFriendsError) {
      alert(fetchFriendsError.message);
      if (fetchFriendsError.errorType === "unauthorized") {
        setLogedOut();
      }
    }
  }, [fetchFriendsError, setLogedOut]);

  return (
    <section className={`${classes.container} ${ShowCtx.show ? classes.hide : ''}`}>
      <ProfileSection />
      { hasOtherUser && <div className={classes.friendSection}>
        <Cart title="User Friends" className={classes.friendSection}>
          {
            friends.map(friend => {
              return <SuggestionItem key={friend._id} user={friend} />
            })
          }
          {
            friends.length === 0 && <span className={classes.noFriend}>Friends Not Found!</span>
          }
        </Cart>
      </div>}
      <UserPosts />
    </section>
  );
};

export default Profile;
