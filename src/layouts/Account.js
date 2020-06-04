
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from '../components/Login'
import Register from '../components/Register'

const Account = () => {
  return (
    <div>
      <Switch>
        <Route path="/account/login" render={props => <Login {...props} />} />
        <Route path="/account/register" render={props => <Register {...props} />} />
      </Switch>
    </div>
  );
}


export default Account;
