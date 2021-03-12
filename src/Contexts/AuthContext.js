import React, { useState, useEffect, createContext } from 'react';
import api from '../services/api';

const link = [
  {
    "name": "PainelCampanhas",
    "nomeorganizacao": "Serviços",
    "path": "/Painel/BlankPage",
    "componente": "PainelCampanhas",
    "icone": "fas fa-clipboard-list"
  }
]

const dadosUser = {
  "email": "nnomad20@gmail.com",

  "fistname": "Myke",
  "lastname": "Pedro Paduelo",

  "descstatus": "Ativo",
  "desctipouser": "Segundo Aprovador",
  "nomeorganizacao": "Serviços",

  "created_at": "2020-01-03T03:00:00.000Z",
  "updated_at": "2020-01-03T03:00:00.000Z",

  "id_org": 1,
  "id_status": 1,
  "id_tipouser": 3,
  "statusacessos": 1,
}


const AuthContext = createContext();

function AuthProvider({ children }) {
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const [ user, setUser ] = useState(dadosUser);
  const [ links, slinks ] = useState(link);



  useEffect(() => {

    // const token = localStorage.getItem('token');
    // api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

    // async function getUser() {
    //   try {
    //     const { data } = await api.get(`/GetUserToken`,{token});

    //     setUser(data.user)
    //     setAuthenticated(true);
    //     setLoading(false)

    //   } catch (error) {
    //     console.log(error)
    //     setAuthenticated(false);
    //     setLoading(false)
    //   }
    // }
    // if (token) {
    //   getUser();
    // }else{
    //   setAuthenticated(false);
    //   setLoading(false)
    // }

    setUser(dadosUser)
    slinks(link)
    setAuthenticated(true);
    setLoading(false)

  }, []);




  async function handleSignup(token,user) {
      
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    
    setUser(user.user)
    setAuthenticated(true);
    setLoading(false)

    return true
  }

  async function handleLogin(token, user) {
      
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(user.user)
    setAuthenticated(true);
    setLoading(false)

    return true
    
  }


  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }








  return (
    <AuthContext.Provider value={{ 
      user,
      links,
      authenticated,
      loading,

      handleSignup,
      handleLogin,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };