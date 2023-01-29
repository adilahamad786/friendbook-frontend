import classes from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Form from "../../components/form/Form";
import validator from "validator";

const ForgotPassword = () => {
  const [forgotOtpBtnClicked, setForgotOtpBtnClicked] = useState(false);
  const navigate = useNavigate();
  const { error: forgotOtpError, sendRequest: sendForgotOtp } = useHttp();
  const { error: verificationOtpError, sendRequest: verifyOtp } = useHttp();
  const [email, setEmail] = useState("")

  const sendForgotOtpHandler = (inputValue, event) => {
    event.preventDefault();

    // Sending Otp on user email
    sendForgotOtp({
      url: "/api/user/forgot-otp",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: inputValue }),
    },
    (res) => {
      setEmail(inputValue);
      alert(res.message);
      setForgotOtpBtnClicked(true);
    });
  };

  const verificationHandler = (inputValue, event) => {
    event.preventDefault();

    const verificationForm = {
      email: email,
      otp: inputValue,
    };

    // submit registeration form
    verifyOtp(
      {
        url: "/api/user/verify-otp",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationForm),
      },
      (res) => {
        if (res.otpIsVerified) {
          Cookies.set("user", JSON.stringify({ email: email, otp: inputValue }));
          navigate("/reset-password");
        }
      }
    );
  };

  useEffect(() => {
    if (forgotOtpError || verificationOtpError) {
      alert(forgotOtpError || verificationOtpError);
    }
    if (forgotOtpError.message === "Account not found!") {
      navigate("/register");
    }
  }, [forgotOtpError, verificationOtpError, navigate]);

  return (
    <section className={classes.container}>
      <div className={classes.formBox}>
        <h3>Forgot Password</h3>
        <Form
          handler={sendForgotOtpHandler}
          inputDisable={false}
          placeholder="Enter Your Email"
          type="email"
          validate={(value) => validator.isEmail(value)}
          btnClicked={false}
          btnDisabled={true}
          btnTextOne="Resend OTP"
          btnTextTwo="Send OTP"
          inputErrorMessage="Invalid Email!"
          />
        {
          forgotOtpBtnClicked &&
          <Form
            handler={verificationHandler}
            inputDisabled={false}
            placeholder="Enter your OTP"
            type="number"
            validate={(value) => value.length === 6}
            btnDisabled={true}
            btnTextTwo="Submit"
            inputErrorMessage="Invalid OTP!"
          />
        }
      </div>
    </section>
  );
};

export default ForgotPassword;
