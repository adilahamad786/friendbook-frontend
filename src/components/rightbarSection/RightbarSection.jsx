import classes from "./RightbarSection.module.css";
// import profile from "../../assets/profile.jpg";
import Cart from "../cart/Cart";
import FollowUser from "../followUser/FollowUser";
import Comment from "../comment/Comment";
import OnlineUser from "../onlineUser/OnlineUser";

const profile =
  "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0";

const RightbarSection = () => {
  const suggestion = [
    { id: 1, img: profile, name: "Fiza" },
    { id: 2, img: profile, name: "Dainsh" },
    { id: 3, img: profile, name: "Farida" },
    { id: 4, img: profile, name: "Siraj" },
  ];

  const activities = [
    {
      id: 1,
      profilePicture: profile,
      name: "Fiza",
      message: "Recently update their profile picture.",
      time: "1 mint ago",
    },
    {
      id: 2,
      profilePicture: profile,
      name: "Adil",
      message: "Liked a post.",
      time: "1 mint ago",
    },
    {
      id: 3,
      profilePicture: profile,
      name: "Danish",
      message: "Comment on your post.",
      time: "1 mint ago",
    },
    {
      id: 4,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
  ];

  const online = [
    {
      id: 1,
      img: profile,
      name: "Adil Ahamad",
    },
    {
      id: 2,
      img: profile,
      name: "Siraj Ahamad",
    },
  ];

  return (
    <div className={classes.rightbarSection}>
      <Cart title="Suggestion For You">
        {suggestion.map((user) => {
          return <FollowUser key={user.id} user={user} />;
        })}
      </Cart>
      <Cart title="Latest Activities">
        {activities.map((user) => {
          return <Comment key={user.id} data={user} />;
        })}
      </Cart>
      <Cart title="Online Friends">
        {online.map((user) => {
          return <OnlineUser key={user.id} user={user} />;
        })}
      </Cart>
    </div>
  );
};

export default RightbarSection;
