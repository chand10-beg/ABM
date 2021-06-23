import React, { Component } from 'react';
import Drawer from './sidebar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SimpleTabs from './Tabs';

const project = (props) => {
 
    return(
        <div>
            <Drawer/>
      <hr/>
        <div style={{marginTop: '5rem'}} ><Paper style={{width: '100%', paddingLeft: '13%'}}>
            <SimpleTabs/>
           </Paper></div>
        </div>
    )
}
export default project;