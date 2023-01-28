import classes from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Form from "../../components/form/Form";
import validator from "validator";

const ForgotPassword = () => {
  const [otpBtnClicked, setOtpBtnClicked] = useState(false);
  const navigate = useNavigate();
  const { error: otpError, sendRequest: sendOtp } = useHttp();
  const { error: verificationError, sendRequest: sendVerificationRequest } = useHttp();
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/register");
  //   }
  // }, [user, navigate]);

  const otpSendHandler = (inputValue, event) => {
    event.preventDefault();

    // Sending Otp on user email
    sendOtp(
      {
        url: "/api/user/send-otp",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputValue }),
      },
      (res) => {
        if (!res.emailExist) {
          alert("Email not exist!");
          navigate("/login");
        }
        else {
          setEmail(inputValue);
          alert(res.message);
          setOtpBtnClicked(true);
        }
      }
    );
  };

  const verificationHandler = (inputValue, event) => {
    event.preventDefault();

    const verificationForm = {
      email: email,
      otp: inputValue,
    };

    // submit registeration form
    sendVerificationRequest(
      {
        url: "/api/user/forgot",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationForm),
      },
      (res) => {
        if (res.verification) {
          Cookies.set("user", JSON.stringify({ email: email, otp: inputValue }));
          navigate("/reset-password");
        }
      }
    );
  };

  useEffect(() => {
    if (otpError || verificationError) {
      alert(otpError || verificationError);
    }
  }, [otpError, verificationError]);

  return (
    <section className={classes.container}>
      <div className={classes.formBox}>
        <h3>Forgot Password</h3>
        <Form
          handler={otpSendHandler}
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
          otpBtnClicked &&
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
