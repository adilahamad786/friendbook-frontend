import Cart from "../../cart/Cart";
import Comment from "../../comment/Comment";

const ActivitySection = () => {
  const profile =
    "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0";

  const activities = [
    {
      _id: 1,
      profilePicture: profile,
      name: "Fiza",
      message: "Recently update their profile picture.",
      time: "1 mint ago",
    },
    {
      _id: 2,
      profilePicture: profile,
      name: "Adil",
      message: "Liked a post.",
      time: "1 mint ago",
    },
    {
      _id: 3,
      profilePicture: profile,
      name: "Danish",
      message: "Comment on your post.",
      time: "1 mint ago",
    },
    {
      _id: 4,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      _id: 5,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      _id: 6,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      _id: 7,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      _id: 8,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      _id: 9,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      _id: 10,
      profilePicture: profile,
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
  ];

  return (
    <Cart title="Latest Activities">
      {activities.map((user) => {
        return <Comment key={user._id} data={user} />;
      })}
    </Cart>
  );
};

export default ActivitySection;
