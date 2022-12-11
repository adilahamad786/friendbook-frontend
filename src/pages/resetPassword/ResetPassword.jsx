import classes from "./ResetPassword.module.css";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (passwordIsValid && againPasswordIsValid) {
      setFormIsValid(true);
    }
    else {
      setFormIsValid(false);
    }
  }, [passwordIsValid, againPasswordIsValid, password, againPassword]);

  const submitHanlder = () => {
    alert("Password update successfully!");

    const formData = {
      password,
    };

    console.log(formData);
  };

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
