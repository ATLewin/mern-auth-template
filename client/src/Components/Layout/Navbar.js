import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import LogOutBtn from './auth/LogOutBtn';

export default function Navbar() {

    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);
    return (
        <div>
            <Link to="/">Home</Link>
            {loggedIn === false && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            )
            }
            {loggedIn === true && (
            <>
                <Link to="/customer">Customers</Link>
                <LogOutBtn/>
            </>)}
            
            
        </div>
    )
}
