
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard'

const Admin = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/dashboard" render={props => <Dashboard {...props} />} />
      </Switch>
    </div>
  );
}


export default Admin;
