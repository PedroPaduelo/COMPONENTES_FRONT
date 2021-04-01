import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SignGmail from './SignGmail';
import LoginGmail from './LoginGmail';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(https://mentalidadeempreendedora.com.br/wp-content/uploads/2017/01/nomade-digital.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center' 
  },
  paper: {
    margin: "5rem 3rem" ,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: "3rem",
    backgroundColor: "#297bff"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "3rem", 
  },
  submit: {
    margin: "5rem 0 3rem" ,
  },
  checkbox:{
    fontWeightBold: 700
}

}));



export default function SignInSide() {
  const classes = useStyles();
  

  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}  >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon className={classes.lockOutlinedIcon}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
         
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <LoginGmail/>
              </Grid>

              <Grid item xs={12}>
                <SignGmail/>
              </Grid>

            </Grid>
            <Box mt={5}>
            </Box>
     
        </div>
      </Grid>
    </Grid>
  );
}