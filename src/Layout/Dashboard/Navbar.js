import 
  React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

import {
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon
} from '@material-ui/core';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import { AuthContext } from '../../Contexts/AuthContext';
import { DashContext } from '../../Contexts/DashContext';



export default function NaveBar({classes}) {

  
  const { open, handleNaveBarClose } = useContext(DashContext);

  const { links, user } = useContext(AuthContext);

  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };




  
    return (
      <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>

        <Avatar className={classes.avatar}>
        </Avatar>
        
        <Typography noWrap className={classes.userLogado}> 
          {user.fistname} {user.lastname}
        </Typography>

        <IconButton onClick={handleNaveBarClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>


      <Divider />
      
        <List>
          {links.map((link, i) => (
            <NavLink  
            key={i}
            activeClassName={classes.naveLink} 
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return 1;
            }}
            to={link.path}
            >
              <ListItem button
              selected={selectedIndex === i}
              onClick={(event) => handleListItemClick(event, i)}>

                  <ListItemIcon>
                    <Icon className={`${link.icone} ${classes.icone} ${classes.listItemIcon}`}></Icon>
                  </ListItemIcon>

                  <ListItemText primary={link.name}/>

              </ListItem>

            </NavLink >
          ))}
        </List>

      <Divider/>

      <List>

      </List>
      
    </Drawer>
    );
}