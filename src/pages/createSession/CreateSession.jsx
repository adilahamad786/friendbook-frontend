import classes from './CreateSession.module.css';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Cookies from "js-cookie";

const CreateSession = () => {
    const token = useParams().token;
    const navigate = useNavigate();

    useEffect(() => {
        Cookies.set("token", `Bearer ${token}`);
        navigate('/');
    }, [token, navigate]);

    return (
        <div className={classes.container}>
            <span className={classes.message}>Waiting...</span>
        </div>
    )
}

export default CreateSession