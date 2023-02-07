import classes from "./SuggestionSection.module.css";
import Cart from "../cart/Cart";
import useHttp from "../../hooks/useHttp";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import SuggestionItem from "../suggestionItem/SuggestionItem";
import { useSelector } from "react-redux";

const SuggestionSection = () => {
  const { token, setLogedOut} = useContext(AuthContext);
  const [suggestion, setSuggestion] = useState([]);
  const { error: fetchSuggestionError, sendRequest: fetchSuggestion } = useHttp();
  const reload = useSelector(state => state.rightbarUpdate.updateCounter);

  useEffect(() => {
    fetchSuggestion({
      url : '/api/user/suggestion',
      headers : {
        Authorization : token
      }
    }, (resData) => {
      setSuggestion(resData);
    });
  }, [fetchSuggestion, setSuggestion, token, reload]);

  useEffect(() => {
    if (fetchSuggestionError) {
      alert(fetchSuggestionError.message);
      if (fetchSuggestionError.errorType === "unauthorized") {
        setLogedOut();
      }
    }
  }, [fetchSuggestionError, setLogedOut]);

  return (
    <Cart title="Suggestion For You">
      {suggestion.map((user) => {
        return <SuggestionItem key={user._id} user={user} />;
      })}
      {
        suggestion.length === 0 && <span className={classes.noSuggestion}>Suggestions Not Found!</span>
      }
    </Cart>
  );
}

export default SuggestionSection;