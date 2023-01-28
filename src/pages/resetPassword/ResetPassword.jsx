import classes from "./ResetPassword.module.css";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ResetPassword = () => {
  const {
    value: password,
    setValue: setPassword,
    isValid: passwordIsValid,
    hasError,
    setFocus,
  } = useInput((value) => value.length >= 6);

  const {
    value: againPassword,
    setValue: setAgainPassword,
    isValid: againPasswordIsValid,
    hasError: hasAgainError,
    setFocus: setAgainFocus,
  } = useInput((value) => value.length >= 6 &&  value === password);

  const [formIsValid, setFormIsValid] = useState(false);
  const { error: resetError, sendRequest: sendResetRequest } = useHttp();
  const navigate = useNavigate();

  // Getting user from cookies
  const user = Cookies.get("user") && JSON.parse(Cookies.get("user"));

  useEffect(() => {
    if (!user) {
      navigate("/forgot");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (passwordIsValid && againPasswordIsValid) {
      setFormIsValid(true);
    }
    else {
      setFormIsValid(false);
    }
  }, [passwordIsValid, againPasswordIsValid, password, againPassword]);

  const submitHanlder = (event) => {
    event.preventDefault();

    const resetForm = {
      email : user?.email,
      otp : user?.otp,
      password
    };

    sendResetRequest({
      url : '/api/user/reset-password',
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(resetForm)
    }, (res) => {
      Cookies.remove("user");
      alert(res.message);
      navigate("/login");
    });
  };

  useEffect(() => {
    if (resetError) {
      alert(resetError);
    }
  }, [resetError]);

  return (
    <div className={classes.container}>
      <form onSubmit={submitHanlder} className={classes.form}>
        <h3>Reset Password</h3>
        <input
          onChange={setPassword}
          onFocus={setFocus}
          className={classes.emailInput}
          type="password"
          placeholder="Create new password"
          required
        />
        {hasError && (
          <span className={classes.invalidMessage}>Password is too short!</span>
        )}
        <input
          onChange={setAgainPassword}
          onFocus={setAgainFocus}
          className={classes.emailInput}
          type="password"
          placeholder="Confirm new password"
          required
        />
        {hasAgainError && (
          <span className={classes.invalidMessage}>Password is not match!</span>
        )}
        <button
          className={classes.updatePasswordButton}
          disabled={ !formIsValid }
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
