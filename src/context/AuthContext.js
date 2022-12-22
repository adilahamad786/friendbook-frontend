import { createContext, useState } from "react";

const AuthContext = createContext({
    isLogedIn : false,
    setLogedIn : (token) => {},
    setLogedOut : () => {},
});


export const AuthContextProvider = (props) => {
    const [isLogedIn, setIsLogedIn] = useState(false);

    const setLogedIn = (token) => {
        setIsLogedIn(true);
        // Cookies.set('token', JSON.stringify(token), { expires: 1 });
    }

    const setLogedOut = () => {
        // callback(Cookies.get('token'));
        // Cookies.remove('token')
        setIsLogedIn(false)
    }

    return <AuthContext.Provider value={ {
        isLogedIn,
        setLogedIn,
        setLogedOut
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;