import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './Components/Layout/auth/Login';
import Register from './Components/Layout/auth/Register';
import Customers from './Components/Layout/Customers/Customers';
import Navbar from "./Components/Layout/Navbar";
import AuthContext from './Context/AuthContext';

export default function Router() {
    const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>(
                {loggedIn === false && (
                    <>
                        <Route path="/register"> 
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path="/customer">
                            <Customers />
                        </Route>
                    </>
                )
                }
                
            </Switch>
        </BrowserRouter>
    )
}
