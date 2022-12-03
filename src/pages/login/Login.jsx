import classes from './Login.module.css';

const Login = () => {
    return (
        <div className={classes.login}>
            <div className={classes.loginWrapper}>
                <div className={classes.loginLeft}>
                    <h3 className={classes.loginLogo}>Friendbook</h3>
                    <span className={classes.loginDescription}>
                        Connect with people and the world around you on Friendbook.
                    </span>
                </div>
                <div className={classes.loginRight}>
                    <div className={classes.loginBox}>
                        <input className={classes.loginInput} type="email" placeholder='Enter email' />
                        <input className={classes.loginInput} type="password" placeholder='Enter password' />
                        <button className={classes.loginButton}>Log In</button>
                        <span className={classes.loginForgot}>Forgot Password?</span>
                        <button className={classes.signupButton}>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;