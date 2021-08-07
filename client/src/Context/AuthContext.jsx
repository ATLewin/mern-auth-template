import axios from 'axios';
import React, {useState, useEffect, createContext} from 'react'

const AuthContext = createContext();

const AuthContextProvider = function (props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    const getLoggedIn = async function() {
        const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
        console.log("Setting logged in to: " + loggedInRes.data);
        setLoggedIn(loggedInRes.data);
    }
    
    useEffect(() => {
        getLoggedIn();
    }, []);
    return (
        <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider}
