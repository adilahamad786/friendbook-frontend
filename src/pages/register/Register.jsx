import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import validator from "validator";
import classes from "./Register.module.css";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";

const Register = () => {
  const {value: username, setValue: setUsername, isValid: usernameIsValid, setFocus: setUsernameFocus, hasError: hasUsernameError} = useInput(value => value.length > 0);
  const {value: email, setValue: setEmail, isValid: emailIsValid, setFocus: setEmailFocus, hasError: hasEmailError} = useInput(value => validator.isEmail(value));
  const {value: password, setValue: setPassword, isValid: passwordIsValid, setFocus: setPasswordFocus, hasError: hasPasswordError} = useInput(value => value.length >= 6);
  const {value: againPassword, setValue: setAgainPassword, isValid: againPasswordIsValid, setFocus: setAgainPasswordFocus, hasError: hasAgainPasswordError} = useInput(value => value.length >= 6 && value === password);

  const [formIsValid, setFormIsValid] = useState(false);
  const { error, sendRequest: login } = useHttp();
  const navigate = useNavigate();

  useEffect(() => {
    if (usernameIsValid && emailIsValid && passwordIsValid && againPasswordIsValid) {
      setFormIsValid(true);
    }
    else {
      setFormIsValid(false);
    }
  }, [usernameIsValid, emailIsValid, passwordIsValid, againPasswordIsValid]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const registerFormData = {
      username,
      email,
      password,
      againPassword
    }

    const transformData = (data) => {
      alert("Registeration successful!");
      navigate('/login');
    }

    login({
        url : '/api/user/register',
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(registerFormData)
      },
      transformData
    );
  }

  return (
    <div className={classes.register}>
      <div className={classes.registerWrapper}>
        <div className={classes.about}>
          <h3 className={classes.registerLogo}>Friendbook</h3>
          <span className={classes.registerDescription}>
            Connect with people and the world around you on Friendbook.
          </span>
        </div>
        <div className={classes.formBox}>
          <form onSubmit={submitHandler} className={classes.registerForm}>
            <h4>Register</h4>
            <input
              onChange={setUsername}
              onFocus={setUsernameFocus}
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
            { hasUsernameError && <span className={classes.invalidMessage}>
              Please enter a valid username!
            </span> }
            <input
              onChange={setEmail}
              onFocus={setEmailFocus}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            { hasEmailError && <span className={classes.invalidMessage}>
              Please enter a valid email!
            </span> }
            <input
              onChange={setPassword}
              onFocus={setPasswordFocus}
              type="password"
              name="password"
              placeholder="Create password"
              required
            />
            { hasPasswordError && <span className={classes.invalidMessage}>
              Create password!
            </span> }
            <input
              onChange={setAgainPassword}
              onFocus={setAgainPasswordFocus}
              type="password"
              name="password_again"
              placeholder="Confirm password"
              required
            />
            { hasAgainPasswordError && <span className={classes.invalidMessage}>
              Confirm password!
            </span> }
            <button disabled={ !formIsValid } className={classes.registerButton}>Register</button>
          </form>
          <Link className={classes.loginButtonLink} to="/login">
            <button className={classes.loginButton}>Log into Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
