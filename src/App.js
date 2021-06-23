import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import access from './Access';
import project from './Project';
import  AppsBar  from './Navbar';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.container} className="App">

     
     <BrowserRouter>
     <AppsBar/>
     <Switch>
       <Route exact path="/" component={access}/>
       <Route exact path="/project" component={project}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
