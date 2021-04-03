import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import TextField from '@material-ui/core/TextField';

import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    width: "100%"
  },

  appBar: {
    position: 'relative',
    marginBottom: "3rem",
  },

  titles: {
    marginLeft: theme.spacing(2),
    flex: 1,
},

  title: {
    flexGrow: 1,
    marginBottom: "2rem",
  },

  conteinerDefinicao: {
    display: "flex",
    width: "100%",
    marginBottom: "3rem",
  },

  paper:{
    marginBottom: theme.spacing(4),
  },

  multiline: {
    width: "100%"
  },

  titleModal: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    marginBottom: "0.2rem"
  },

  formControl: {
    width: "100%"
  },

  btnEditUser: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    marginBottom: "2rem",
    marginTop: "3rem"
  },

  typography:{
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: "2rem"
  },

  item:{
    marginRight: "0.8rem"
  }
    

}));



export default function Modal() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [invisible, setInvisible] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };


  return (
    <React.Fragment>

      <IconButton color="inherit" size={'medium'} onClick={handleClickOpen}>
        <AddCircleOutlineIcon />
      </IconButton>
    
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>

            <Typography variant="h6" className={classes.titles}>
              Cria Lista
            </Typography>

            <Button autoFocus color="inherit" onClick={handleClose} startIcon={<SaveIcon />}>
              Save
            </Button>
          </Toolbar>
        </AppBar>


        <DialogContent>



          <Grid container spacing={2}>

            <Grid item xs={12} className={classes.conteinerDefinicao} >

              <Grid item xs={11}>
                <TextField className={classes.formControl} label="Titulo Lista" />
              </Grid>
              
              <Grid item xs={1} >
                <Switch color="primary" checked={!invisible} onChange={handleBadgeVisibility} />
              </Grid>
            
            </Grid>

          </Grid>



        </DialogContent>

      </Dialog>
    </React.Fragment>
  );
}
