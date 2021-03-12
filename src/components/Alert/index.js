import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function SimpleAlerts({alerta, handleClose}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Snackbar 
      open={alerta.open} 
      autoHideDuration={4000} 
      TransitionComponent={Slide}
      onClose={handleClose} 
      anchorOrigin={{ 
        vertical: alerta.vertical, 
        horizontal: alerta.horizontal }} 
      >

        <Alert variant="filled" severity={alerta.type}>
          {alerta.mensagem}
        </Alert>

      </Snackbar>

    </div>
  );
}