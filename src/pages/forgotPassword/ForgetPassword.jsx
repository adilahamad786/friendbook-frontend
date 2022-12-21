import classes from "./ForgetPassword.module.css";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import validator from "validator";

const ForgetPassword = () => {
  const { value, setValue, isValid, setFocus, hasError } = useInput((value) =>
    validator.isEmail(value)
  );
  const navigate = useNavigate();

  const submitHandler = () => {
    alert("Please check you email account for reset password link.");
    navigate("/reset/rendomId");
  };

  console.log(value);

  return (
    <section className={classes.container}>
      <form onSubmit={submitHandler} className={classes.form}>
        <h3>Create password reset link.</h3>
        <input
          onChange={setValue}
          onFocus={setFocus}
          className={classes.emailInput}
          type="email"
          placeholder="Enter your email"
          required
        />
        {hasError && (
          <span className={classes.invalidMessage}>Invalid email address!</span>
        )}
        <button className={classes.sendLink} disabled={ !isValid }>
          Send Link
        </button>
      </form>
    </section>
  );
};

export default ForgetPassword;
