import classes from './Register.module.css';

const Register = () => {
    return (
        <div className={classes.register}>
            <div className={classes.registerWrapper}>
                <div className={classes.registerLeft}>
                    <h3 className={classes.registerLogo}>Friendbook</h3>
                    <span className={classes.registerDescription}>
                        Connect with people and the world around you on Friendbook.
                    </span>
                </div>
                <div className={classes.registerRight}>
                    <div className={classes.registerBox}>
                        <input className={classes.registerInput} type="text" name='username' placeholder='Enter username' />
                        <input className={classes.registerInput} type="email" name='email' placeholder='Enter email' />
                        <input className={classes.registerInput} type="password" name='password' placeholder='Enter password' />
                        <input className={classes.registerInput} type="password" name='password' placeholder='Enter password again' />
                        <button className={classes.registerButton}>Register</button>
                        <button className={classes.loginButton}>Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;