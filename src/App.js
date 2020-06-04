import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './context/auth';
import AdminLayout from "./layouts/Admin";
import AccountLayout from "./layouts/Account";
import {setAxiosAuthorizationHeader} from './axiosConfig'
import './index.css'
function App() {
    const setTokensFromLocalStorage = () => {
        let tokens = localStorage.getItem("token");
        try {
            if (tokens) {
                let parseTokens = JSON.parse(tokens);
                setAxiosAuthorizationHeader(parseTokens);
                return parseTokens;
            }
        } catch (err) {
            return null;
        }

    }
  
    const [authTokens, setAuthTokens] = useState(setTokensFromLocalStorage());

    const setTokens = (data) => {
        localStorage.setItem("token", JSON.stringify(data));
        setAxiosAuthorizationHeader(data && data);
        setAuthTokens(data);
    }



    return <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/admin" component={props => <AdminLayout {...props} />} />
                <Route path="/account" component={props => <AccountLayout {...props} />} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    </AuthContext.Provider>
}
export default App;