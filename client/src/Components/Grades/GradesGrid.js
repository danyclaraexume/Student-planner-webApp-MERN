import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(Code, Title, Credit, Grade,Result) {
  return {
    Code, Title, Credit, Grade,Result,
    Results: [
      { Evaluation: 'Quiz 1', Grade: 'A', Percentage: '10%', ClassAverage: 'B'},
      { Evaluation: 'Intra', Grade: 'B', Percentage: '30%', ClassAverage: 'C'},
      { Evaluation: 'Quiz 2', Grade: 'C', Percentage: '10%', ClassAverage: 'C'},
      { Evaluation: 'Final Project', Grade: 'A', Percentage: '25%', ClassAverage: 'B'},
      { Evaluation: 'Final', Grade: 'B', Percentage: '25%', ClassAverage: 'B'}
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="right">{row.Code}</TableCell>
        <TableCell align="right">{row.Title}</TableCell>
        <TableCell align="right">{row.Credit}</TableCell>
        <TableCell align="right">{row.Grade}</TableCell>
        <TableCell align="right">{row.Result}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Results
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell component="th" scope="row">Evaluation</TableCell>
                    <TableCell component="th" scope="row">Grade</TableCell>
                    <TableCell component="th" scope="row">Pourcentage</TableCell>
                    <TableCell component="th" scope="row">Class Average</TableCell>
                  </TableRow>
                </TableHead>                
                <TableBody> 
                  {row.Results.map((Result) => (                   
                    <TableRow key={Result.Evaluation}>
                        <TableCell>{Result.Evaluation}</TableCell>
                        <TableCell>{Result.Grade}</TableCell>
                        <TableCell>{Result.Percentage}</TableCell>
                        <TableCell>{Result.ClassAverage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('INF-1111', 'Teleinformatique', 3, 'A'),
  createData('INF-1112', 'Infographie', 3, 'A'),
  createData('INF-1113', 'Intro Gestion', 3, 'A'),
  createData('INF-1114', 'Economie', 3, 'A'),
  createData('INF-1115', 'Anglais', 3, 'A')
];

export default function GradesGrid() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Acronyme</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Credit</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Code} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}