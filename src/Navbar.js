import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { BiShieldQuarter } from 'react-icons/bi';
import { VscOrganization } from 'react-icons/vsc';
import AppBar from '@material-ui/core/AppBar';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
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

const AppsBar =(props, {defaultActive}) =>{
  const [activeIndex, setActiveIndex] = useState(defaultActive || 0);
  const [colorP, setcolorP] = useState("white");
  const { history } = props;
  const {window} = props;
  console.log(props)
  const changecolor = () =>{
    setcolorP("black")
  }

  const classes = useStyles();

  const itemsList = [
    {
        text: 'Projects',
      icon: <AccountTreeIcon size='1.7rem'/>,
      onClick:  () => history.push('/project'),

      },
{
  text: 'Organization',
  icon: <VscOrganization size='1.7rem'/>,
  onClick:  () => history.push('/Org')

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
      
   

    <Drawer variant="permanent" className={classes.drawer}>
    <div style={{display: 'flex', paddingLeft: '1rem'}} className={classes.toolbar}>
      <span style={{paddingTop:'1rem', paddingRight: '1rem'}}> <DeveloperModeIcon/></span>
      <h2 style={{padding: '0', margin: '0', paddingTop:'1rem', color: '#4B0082', fontFamily: 'montserrat'}}> MYSITE</h2>
     
      </div>
      <Divider />
     <List stye={{fontFamily: 'Verdana, sans-serif'}}>
       {itemsList.map((item, index) => {
           const {text,icon, onClick} = item;
           return(
            
          <ListItem   key={text} onClick={() => { onClick(); setActiveIndex(index);}} style={{backgroundColor: index === activeIndex ? '#b19cd9': 'white',borderLeft : index === activeIndex ? 'solid 4px	#4B0082': 'white'}}>
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