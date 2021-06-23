import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { BiShieldQuarter } from 'react-icons/bi';
import { VscOrganization } from 'react-icons/vsc';
import AppBar from '@material-ui/core/AppBar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';
import {withRouter} from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
   
    width: "190px",
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
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
    width: drawerWidth,
  },
  content: {
   
    flexGrow: 1,

    
  },
}));

const AppsBar =(props) =>{
  const { history } = props;
  const {window} = props;
  console.log(props)

  const classes = useStyles();

  const itemsList = [
    {
        text: 'Projects',
      icon: <AiOutlineQuestionCircle size='1.7rem'/>,
      onClick:  () => history.push('/project')
      },
{
  text: 'Organization',
  icon: <VscOrganization size='1.7rem'/>

},
{
  text: 'Access',
  icon: <BiShieldQuarter size='1.7rem'/>,
  onClick:  () => history.push('/')
},
  ];
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div>
      
      {/* <AppBar style={{background: 'white'}} position="fixed" className={classes.appBar}>
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
      </AppBar> */}

    <Drawer variant="permanent" className={classes.drawer}>
    <div className={classes.toolbar} />
      <Divider />
     <List stye={{fontFamily: 'Verdana, sans-serif'}}>
       {itemsList.map((item, index) => {
           const {text,icon, onClick} = item;
           return(
          <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        )})}

      </List>
  </Drawer>

  </div>
  );
}



export default withRouter(AppsBar);