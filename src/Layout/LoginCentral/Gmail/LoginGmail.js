import React, {  useContext } from 'react';

import { useHistory } from "react-router-dom";

import GoogleLogin from 'react-google-login';

import { AuthContext } from '../../../Contexts/AuthContext';

import api from '../../../services/api';

export default function SignInSide() {

  const { handleLogin } = useContext(AuthContext);
  const history = useHistory();


  
  async function Logar(response){

    const tokenId = response.tokenId
    const {data} = await api.post(`/LoginUser`, {tokenId})

    const setContextUser =  await handleLogin(tokenId,data)

    if(setContextUser){
      history.push('/PainelGeral')
    }
    
    history.push('/Painel')
  } 


  const responseGoogle = (response) => {
  }
  
  return (
  
    <div>
      <GoogleLogin
        clientId="457320718168-34ekq1e25neb1dnneg0g8qooq0udr6n3.apps.googleusercontent.com"
        buttonText="Logar com Gmail"
        onSuccess={Logar}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
    
  );
}

