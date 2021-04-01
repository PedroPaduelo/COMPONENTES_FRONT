import React from "react";

import { Switch } from "react-router-dom";
import CustomRoute from './CustomRoute'

import LoginCentralLogin from "../Layout/LoginCentral/Jwt/Login";
import LoginCentralSign from "../Layout/LoginCentral/Jwt/Sign";
import Dashboard from "../Layout/Dashboard";


function Routes(){
  
  return(
    <Switch>

      <CustomRoute exact path="/" redirectTO={"/"} component={LoginCentralLogin} /> 
      <CustomRoute exact path="/Sign" redirectTO={"/"} component={LoginCentralSign} /> 

      <CustomRoute isPrivate path="/Painel" redirectTO={"/"} component={Dashboard} /> 

    </Switch>
  );
}

export default Routes;











































