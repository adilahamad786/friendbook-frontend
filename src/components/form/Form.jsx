import classes from "./Form.module.css";
import useInput from "../../hooks/useInput";

const OtpForm = (props) => {
    const {
      value,
      setValue,
      isValid,
      setFocus,
      hasError,
    } = useInput((value) => props?.validate(value));

  return (
    <form onSubmit={props.handler?.bind(null, value)} className={classes.form}>
      <input
        onChange={setValue}
        onFocus={setFocus}
        type={props?.type}
        placeholder={props?.placeholder}
        disabled={props?.inputDisable}
        required={true}
      />
      {hasError && <span className={classes.invalidMessage}>{props?.inputErrorMessage}</span>}
      <button disabled={!isValid && props.btnDisabled} className={classes.sendLink}>
        {props?.btnClicked ? props?.btnTextOne : props?.btnTextTwo}
      </button>
    </form>
  );
};

export default OtpForm;
