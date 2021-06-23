import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { BiShieldQuarter } from 'react-icons/bi';
import { VscOrganization } from 'react-icons/vsc';
import AppBar from '@material-ui/core/AppBar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    
    
    appBar: {
    //   [theme.breakpoints.up('sm')]: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     marginLeft: drawerWidth,
    //   },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
    //   width: drawerWidth,
    },
    content: {
     
      flexGrow: 1,
  
      
    },
  }));
const Drawer = props => {

  const classes = useStyles();
  
  return (
    <AppBar style={{background: 'white'}} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="grey"
        
            aria-label="open drawer"
            edge="end"
           
         
          >
            <MenuIcon />
          </IconButton>
         
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{marginLeft: '90%'}}
                color="grey"
              >
                <AccountCircle/>
                              </IconButton>
                          
                              <IconButton aria-label="show 11 new notifications" color="grey">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="grey">
          <Badge color="secondary">
            <AiOutlineQuestionCircle/>
          </Badge>
        </IconButton>
        <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{marginLeft: '90%'}}
                color="grey"
              >
                <AccountCircle/>
                              </IconButton>
                           
        </Toolbar>
      </AppBar> 
  );
};

export default Drawer;
