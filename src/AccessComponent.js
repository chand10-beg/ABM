import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './AccessComponent.css'
import './Table.css'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'grey',
    color: theme.palette.common.white,
  },
  body: {
      padding: '8px',
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Department, Access, memberscount, LastUpdated, view) {
  return { Department, Access, memberscount, LastUpdated, view };
}
function createData1(Department, Access, Summary, LastUpdated, view) {
  return { Department, Access, Summary, LastUpdated, view };
}
const rowsDeparatment = [
  createData('Management Team', 'All Access', 4, '1 min ago', <VisibilityIcon/>),
  createData('Procurment Team', 'Restricted Access', 8, '1 min ago', <VisibilityIcon/>),
  createData('Project Team','Restricted Access', 16, '1 min ago',<VisibilityIcon/>),
  createData('It Team', 'Restricted Access', 4, '1 min ago', <VisibilityIcon/>),
  createData('Super Admin', 'All Access', 1, '1 min ago', <VisibilityIcon/>),
];
const rows= [
  createData1('Budget', 'All Access','View|Create|Edit'  ,'1 min ago', ),
  createData1('Bidding', 'Restricted Access', 'View|Create|Edit' ,'1 min ago',),
  createData1('Vendor Portal','Restricted Access', 'View|Create|Edit' ,'1 min ago',),
  createData1('Purchase Order/Work Order', 'Restricted Access', 'View|Create|Edit' ,'1 min ago', ),
  createData1('Organizational Profile', 'All Access',  'View|Create|Edit','1 min ago',),
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 34,
    height: 18,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 16,
    height: 16,
  },
  track: {
    borderRadius: 22 / 2,
    border: `1px solid ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.grey[500],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const CustomizedTables =(props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [open, setOpen] = React.useState(false);
  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.value]: event.target.checked });
  };
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
   
    setSelectedValue(event.target.value);
    
  };
  const handleBack = () =>{
    setSelectedValue(null)
  }

   return (
     <div>
     { selectedValue === null ? (
       <div>
       <Grid item xs={2} style={{paddingRight: '1.5rem'}}><Button startIcon={<AddIcon/>} style={{background: '#663399', color: 'white'}} variant="outlined" >Add Role</Button>
       <IconButton aria-label="delete" className={classes.margin}>
     <EditIcon fontSize="small" />
     </IconButton>   
       <IconButton aria-label="delete" className={classes.margin}>
     <DeleteIcon fontSize="small" />
   </IconButton>
   </Grid>
   <Grid item xs={10}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
          <StyledTableCell >&nbsp;</StyledTableCell>
            <StyledTableCell style={{backgroundColor: 'grey !important'}}>Department/Role Name</StyledTableCell>
            <StyledTableCell align="center">Access Level</StyledTableCell>
            <StyledTableCell align="center">No. of members</StyledTableCell>
            <StyledTableCell align="center">Last Updated</StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsDeparatment.map((row) => (
            <StyledTableRow key={row.Department}>
                <StyledTableCell component="th" scope="row">
                <Radio
          checked = {selectedValue === row.Department} 
        value={row.Department}
        onClick={handleChange}
      />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.Department}
              </StyledTableCell>
              <StyledTableCell align="center">
 {  row.Access === "All Access"   ? (        <span style={{ cursor: 'not-allowed', justifyContent: 'center'}}>
 <Button style={{fontSize: '0.6rem',width: '8rem',backgroundColor: '#8AFF8A', border: 'solid 1px  green', borderRadius: '16px', fontWeight: 'bold' }}  disabled>
 {row.Access}
 </Button>
</span>):(
    <span style={{ cursor: 'not-allowed' }}>
    <Button style={{ fontSize: '0.6rem',width: '8rem',backgroundColor: '#F7BEC0', border: 'solid 1px  red', borderRadius: '16px', fontWeight: 'bold' }}  disabled>
    {row.Access}
    </Button>
   </span>

)}</StyledTableCell>
              <StyledTableCell align="center">{row.memberscount}</StyledTableCell>
              <StyledTableCell align="center">{row.LastUpdated}</StyledTableCell>
              <StyledTableCell align="center"><Button>{row.view}</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </div>
     ):( 
      <div>
      <Grid item xs={4} style={{paddingRight: '14.5rem'}}><Button onClick={handleBack}  style={{background: 'white', color: '#663399'}} ><ArrowBackIcon/></Button>
   <span style={{color: '#663399', fontWeight: 'bold'}}>{selectedValue}</span>
   <IconButton aria-label="delete" className={classes.margin}>
    <EditIcon fontSize="small" />
    </IconButton>   
     
  </Grid>

        <Tabs style={{marginBottom: '1rem'}}  value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Access Control" {...a11yProps(0)} />
          <Tab disabled label="Assigned Members" {...a11yProps(1)} />
          
        </Tabs>

      <TabPanel value={value} index={0}>
      <Grid item xs={10}>  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
          <StyledTableCell >&nbsp;</StyledTableCell>
            <StyledTableCell style={{backgroundColor: 'grey !important'}}>Department/Role Name</StyledTableCell>
            <StyledTableCell align="center">Access Level</StyledTableCell>
            <StyledTableCell align="center">Summary</StyledTableCell>
            <StyledTableCell align="center">Last Updated</StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (

            <StyledTableRow key={row.Department}>

                <StyledTableCell component="th" scope="row">
       
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              
             <Paper style={{padding: '1rem'}}>
               All subjects in the bidding module
            
            
             <Grid spacing={3} container style={{marginTop: '0.5rem'}}>
               
               <Grid item xs={6}>
Access Control
<div>  <Radio style={{color: '#663399'}} size="small"/><span>All Access</span></div>
<div>  <Radio style={{color: '#663399'}} size="small"/><span>Restricted Access</span></div>
               </Grid>
               
               <Grid item xs={6}>
Permissions
<div>   <Checkbox
       
       color="primary"
          /><span>View Item in Access</span></div>
<div>  <Checkbox
          
          color="primary"
          /><span>Edit item Access</span></div>
          <div>  <Checkbox
          
          color="primary"
          /><span>Create item in Access</span></div>
          <div>  <Checkbox
          
          color="primary"
          /><span>Delete icon in Access</span></div>
               </Grid>
               </Grid>
               </Paper>
            </Box>
          </Collapse>
        
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.Department}
              </StyledTableCell>
              <StyledTableCell align="center">
 {  row.Access === "All Access"   ? (        <span style={{ cursor: 'not-allowed', justifyContent: 'center'}}>
 <Button style={{ fontSize: '0.6rem', width: '8rem',backgroundColor: '#8AFF8A', border: 'solid 1px  green', borderRadius: '16px', fontWeight: 'bold' }}  disabled>
 {row.Access}
 </Button>
</span>):(
    <span style={{ cursor: 'not-allowed' }}>
    <Button style={{fontSize: '0.6rem', width: '8rem',backgroundColor: '#F7BEC0', border: 'solid 1px  red', borderRadius: '16px', fontWeight: 'bold' }}  disabled>
    {row.Access}
    </Button>
   </span>

)}</StyledTableCell>
              <StyledTableCell align="center">{row.Summary}</StyledTableCell>
              <StyledTableCell align="center">{row.LastUpdated}</StyledTableCell>
              <StyledTableCell align="center"><IOSSwitch color="secondary" checked={state.checked} onChange={handleChangeSwitch} value={row.Department} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
      </TabPanel>
      <TabPanel  disabled index={1}>
        Item Two
      </TabPanel>
     
 
    </div>)

}
</div>
  );
}
export default CustomizedTables;