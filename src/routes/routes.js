import React from "react";

import { Switch } from "react-router-dom";
import CustomRoute from './CustomRoute'

import Login from "../Layout/Login/Gmail";
import Dashboard from "../Layout/Dashboard";


function Routes(){
  
  return(
    <Switch>

      <CustomRoute exact path="/" redirectTO={"/"} component={Login} /> 
      <CustomRoute isPrivate path="/Painel" redirectTO={"/"} component={Dashboard} /> 

    </Switch>
  );
}

export default Routes;











































