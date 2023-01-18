import classes from "./SearchResultCart.module.css";
import Cart from "../cart/Cart";
import SuggestionItem from "../suggestionItem/SuggestionItem";
import { useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthContext";
import useHttp from "../../hooks/useHttp";

const SearchResultCart = (props) => {
  const [users, setUsers] = useState([]);
  const { token, setLogedOut } = useContext(AuthContext);
  const { error, sendRequest: fetchUsers } = useHttp();

  useEffect(() => {
    fetchUsers({
      url : "/api/user/all-users",
      headers : {
        Authorization : token
      }
    }, (resData) => setUsers(resData));
  }, [fetchUsers, token, setUsers]);

  useEffect(() => {
    if (error) {
      alert(error.message);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);

  const searchResult = users.filter(user => {
    return user.username.toLocaleLowerCase().includes(props.searchText.toLowerCase())
  });

  return (
      <Cart className={classes.searchResultCart}>
        {searchResult.map((user) => {
          return <SuggestionItem key={user._id} user={user} />;
        })}
      </Cart>
  );
};

export default SearchResultCart;
