import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Avatar,
} from '@material-ui/core';



const useStyles = makeStyles({
  detalhesUser:{
    display: "flex",
  },
  avatar:{
    marginRight: "0.5rem"
  },
  userName:{
    marginLeft: "0.5rem"
  }
});


export default function DenseTable({ nomeCampanha, imagemCampanha }) {
  const classes = useStyles();

  return (
    <div className={classes.detalhesUser}>

      <Avatar className={classes.avatar}>
        
      </Avatar>

      <div >
        <Typography noWrap className={classes.userName}> {nomeCampanha} </Typography>
      </div>

  </div>
  );
}