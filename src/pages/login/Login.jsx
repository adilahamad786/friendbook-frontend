import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import validator from "validator";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const {
    value: email,
    setValue: setEmail,
    isValid: emailIsValid,
    hasError: hasEmailError,
    setFocus: setEmailFocus,
  } = useInput((value) => validator.isEmail(value));

  const {
    value: password,
    setValue: setPassword,
    isValid: passwordIsValid,
    hasError: hasPasswordError,
    setFocus: setPasswordFocus,
  } = useInput((value) => value.length >= 6);

  const [formIsValid, setFormIsValid] = useState(false);

  const { isLoading, error, sendRequest } = useHttp();
  const { isLogedIn ,setLogedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setFormIsValid(true)
    }
    else {
      setFormIsValid(false);
    }
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    // alert("Form submit successfully!");
    const credential = {
      email,
      password,
    };

    const transformData = async (data) => {
      setLogedIn(data.token);
      console.log(data);
      console.log(isLogedIn);
      navigate('/')
    }

    sendRequest({ 
        url : '/api/user/login',
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(credential)
      },
      transformData
    );

    console.log(credential);
  };

  return (
    <section className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.about}>
          <h3 className={classes.loginLogo}>Friendbook</h3>
          <span className={classes.loginDescription}>
            Connect with people and the world around you on Friendbook.
          </span>
        </div>
        <div className={classes.formBox}>
          <form onSubmit={submitHandler} className={classes.loginForm}>
            <h4>Login</h4>
            <input
              onChange={setEmail}
              onFocus={setEmailFocus}
              className={classes.loginInput}
              type="email"
              placeholder="Enter your email"
              required
            />
            {hasEmailError && (
              <span className={classes.invalidMessage}>
                Please enter a valid email!
              </span>
            )}
            <input
              onChange={setPassword}
              onFocus={setPasswordFocus}
              className={classes.loginInput}
              type="password"
              placeholder="Enter your password"
              required
            />
            {hasPasswordError && (
              <span className={classes.invalidMessage}>
                Password should contain atleast 6 characters!
              </span>
            )}
            <button disabled={ !formIsValid } className={classes.loginButton}>Log In</button>
          </form>
          <Link className={classes.forgot} to="/forgot">
            Forgot Password?
          </Link>
          <Link className={classes.registerButtonLink} to="/register">
            <button className={classes.registerButton}>
              Create a New Account
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
