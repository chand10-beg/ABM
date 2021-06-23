import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'grey',
    color: theme.palette.common.white,
  },
  body: {
      padding: '10px',
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

const rows = [
  createData('Management Team', 'All Access', 4, '1 min ago', <VisibilityIcon/>),
  createData('Procurment Team', 'Restricted Access', 8, '1 min ago', <VisibilityIcon/>),
  createData('Project Team','Restricted Access', 16, '1 min ago',<VisibilityIcon/>),
  createData('It Team', 'Restricted Access', 4, '1 min ago', <VisibilityIcon/>),
  createData('Super Admin', 'All Access', 1, '1 min ago', <VisibilityIcon/>),
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{backgroundColor: 'grey !important'}}>Department/Role Name</StyledTableCell>
            <StyledTableCell align="right">Access Level</StyledTableCell>
            <StyledTableCell align="right">No. of members</StyledTableCell>
            <StyledTableCell align="right">Last Updated</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Department}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Access}</StyledTableCell>
              <StyledTableCell align="right">{row.memberscount}</StyledTableCell>
              <StyledTableCell align="right">{row.LastUpdated}</StyledTableCell>
              <StyledTableCell align="right"><Button>{row.view}</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}