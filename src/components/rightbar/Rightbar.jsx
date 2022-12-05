import classes from "./Rightbar.module.css";
import profile from "../../assets/profile.jpg";
import Cart from "../rightbarCart/RightbarCart";
import FollowUser from "../followUser/FollowUser";
import ActivityUser from "../activityUser/ActivityUser";
import OnlineUser from "../onlineUser/OnlineUser";

const Rightbar = () => {
  const suggestion = [
    { img: profile, name: "Fiza" },
    { img: profile, name: "Dainsh" },
    { img: profile, name: "Farida" },
    { img: profile, name: "Siraj" },
  ];

  const activities = [
    {
      img: profile,
      name: "Fiza",
      message: "Recently update their profile picture.",
      time: "1 mint ago",
    },
    {
      img: profile,
      name: "Adil",
      message: "Liked a post.",
      time: "1 mint ago",
    },
    {
      img: profile,
      name: "Danish",
      message: "Comment on your post.",
      time: "1 mint ago",
    },
    {
      img: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
  ];

  const online = [
    {
      img: profile,
      name: "Adil Ahamad",
    },
    {
      img: profile,
      name: "Siraj Ahamad",
    },
  ];

  return (
    <div className={classes.rightbar}>
      <div className={classes.container}>
        <Cart title="Suggestion For You">
          {suggestion.map((user) => {
            return <FollowUser user={user} />;
          })}
        </Cart>
        <Cart title="Latest Activities">
          {activities.map((user) => {
            return <ActivityUser user={user} />;
          })}
        </Cart>
        <Cart title="Online Friends">
          {online.map((user) => {
            return <OnlineUser user={user} />;
          })}
        </Cart>
      </div>
    </div>
  );
};

export default Rightbar;
