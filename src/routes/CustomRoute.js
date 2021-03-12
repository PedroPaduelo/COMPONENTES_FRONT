import React , { useContext } from "react";
import { Route, Redirect} from "react-router-dom";
import { LinearProgress } from '@material-ui/core';
import { AuthContext } from '../Contexts/AuthContext';



export function CustomLoadingOverlay() {
    return (
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
    );
}





function CustomRoute({ isPrivate, redirectTO, ...rest }) {
  const { loading, authenticated } = useContext(AuthContext);

  
  if (isPrivate && loading) {
    return <CustomLoadingOverlay/>;
  }else{
    if (isPrivate && !authenticated) {
      return <Redirect to={redirectTO} />
    }else{
      return <Route {...rest} />;
    }
  }
}


export default CustomRoute;