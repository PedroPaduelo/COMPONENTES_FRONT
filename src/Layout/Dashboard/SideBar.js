import React, { useContext } from 'react';
import clsx from 'clsx';

import { Typography, IconButton, AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { DashContext } from '../../Contexts/DashContext';

export default function SideBar({classes}) {

  const { 
    handleNaveBarOpen, 
    open,
  } = useContext(DashContext);




  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleNaveBarOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon/>
        </IconButton>
        

        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Gestor de Pages
        </Typography>


      </Toolbar>
    </AppBar>
  );
}