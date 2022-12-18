import { ClassNames } from "@emotion/react";
import Cart from "../cart/Cart";
import FollowUser from "../followUser/FollowUser";

const SearchResultCart = (props) => {
  const profile =
    "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0";

  const suggestion = [
    { id: 1, img: profile, name: "Fiza" },
    { id: 2, img: profile, name: "Dainsh" },
    { id: 3, img: profile, name: "Farida" },
    { id: 4, img: profile, name: "Siraj" },
  ];

  const searchResult = suggestion.filter(user => {
    return user.name.toLocaleLowerCase().includes(props.searchText.toLowerCase())
  });

  return (
      <Cart className={ClassNames.searchResultCart}>
        {searchResult.map((user) => {
          return <FollowUser key={user.id} user={user} />;
        })}
      </Cart>
  );
};

export default SearchResultCart;
