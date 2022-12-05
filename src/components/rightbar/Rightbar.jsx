import classes from "./Rightbar.module.css";
import profile from "../../assets/profile.jpg";
import Cart from "../rightbarCart/RightbarCart";
import FollowUser from "../followUser/FollowUser";
import ActivityUser from "../activityUser/ActivityUser";
import OnlineUser from "../onlineUser/OnlineUser";

const Rightbar = () => {
  const suggestion = [
    { id : 1, img: profile, name: "Fiza" },
    { id : 2, img: profile, name: "Dainsh" },
    { id : 3, img: profile, name: "Farida" },
    { id : 4, img: profile, name: "Siraj" },
  ];

  const activities = [
    {
      id : 1,
      img: profile,
      name: "Fiza",
      message: "Recently update their profile picture.",
      time: "1 mint ago",
    },
    {
      id : 2,
      img: profile,
      name: "Adil",
      message: "Liked a post.",
      time: "1 mint ago",
    },
    {
      id : 3,
      img: profile,
      name: "Danish",
      message: "Comment on your post.",
      time: "1 mint ago",
    },
    {
      id : 4,
      img: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
  ];

  const online = [
    {
      id : 1,
      img: profile,
      name: "Adil Ahamad",
    },
    {
      id : 2,
      img: profile,
      name: "Siraj Ahamad",
    },
  ];

  return (
    <div className={classes.rightbar}>
      <div className={classes.container}>
        <Cart title="Suggestion For You">
          {suggestion.map((user) => {
            return <FollowUser key={user.id} user={user} />;
          })}
        </Cart>
        <Cart title="Latest Activities">
          {activities.map((user) => {
            return <ActivityUser key={user.id} user={user} />;
          })}
        </Cart>
        <Cart title="Online Friends">
          {online.map((user) => {
            return <OnlineUser key={user.id} user={user} />;
          })}
        </Cart>
      </div>
    </div>
  );
};

export default Rightbar;
