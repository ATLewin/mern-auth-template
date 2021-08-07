import axios from 'axios';
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext'

export default function LogOutBtn() {
    
    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory();

    const logOut = async function () {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push('/');
    }
    
    return (
        <button onClick={logOut}>
            Log Out
        </button>
    )
}
