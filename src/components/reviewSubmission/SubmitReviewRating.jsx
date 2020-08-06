import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Table from 'react-bootstrap/Table'
import { makeStyles } from '@material-ui/core/styles';

const overall = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const easiness = {
    0.5: 'Very Difficult',
    1: 'Very Difficult',
    1.5: 'Difficult',
    2: 'Difficult',
    2.5: 'Average',
    3: 'Average',
    3.5: 'Easy',
    4: 'Easy',
    4.5: 'Very Easy',
    5: 'Very Easy',
  };

  const workload = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const clarity = {
    0.5: 'Very Confusing',
    1: 'Very Confusing',
    1.5: 'Confusing',
    2: 'Confusing',
    2.5: 'Ok',
    3: 'Ok',
    3.5: 'Clear',
    4: 'Clear',
    4.5: 'Very Clear',
    5: 'Very Clear',
  };

  const approachability = {
    0.5: 'Very Mean',
    1: 'Very Mean',
    1.5: 'Mean',
    2: 'Mean',
    2.5: 'Ok',
    3: 'Ok',
    3.5: 'Nice',
    4: 'Nice',
    4.5: 'Very Nice',
    5: 'Very Nice',
  };

  const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
  });

function SubmitReviewRating(){
    const [overallValue, setOverallValue] = React.useState(2);
    const [overallHover, setOverallHover] = React.useState(-1);

    const [easinessValue, setEasinessValue] = React.useState(2);
    const [easinessHover, setEasinessHover] = React.useState(-1);

    const [workloadValue, setWorkloadValue] = React.useState(2);
    const [workloadHover, setWorkloadHover] = React.useState(-1);

    const [clarityValue, setClarityValue] = React.useState(2);
    const [clarityHover, setClarityHover] = React.useState(-1);

    const [approachabilityValue, setApproachabilityValue] = React.useState(2);
    const [approachabilityHover, setApproachabilityHover] = React.useState(-1);
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Table striped bordered hover>
            <tr>
                <td>Overall</td>
                <td>
                    <Rating
                        name="overall"
                        size="large"
                        value={overallValue}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setOverallValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setOverallHover(newHover);
                        }}
                    />
                    {overallValue !== null && <Box ml={2}>{overall[overallHover !== -1 ? overallHover : overallValue]}</Box>}
                </td>
            </tr>
            <tr>
                <td>Easiness</td>
                <td>
                    <Rating
                        name="Easiness"
                        value={easinessValue}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setEasinessValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setEasinessHover(newHover);
                        }}
                    />
                    {easinessValue !== null && <Box ml={2}>{easiness[easinessHover !== -1 ? easinessHover : easinessValue]}</Box>}
                </td>
            </tr>
            <tr>
                <td>Workload</td>
                <td>
                    <Rating
                        name="Workload"
                        value={workloadValue}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setWorkloadValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setWorkloadHover(newHover);
                        }}
                    />
                    {workloadValue !== null && <Box ml={2}>{workload[workloadHover !== -1 ? workloadHover : workloadValue]}</Box>}
                </td>
            </tr>
            <tr>
                <td>Clarity</td>
                <td>
                    <Rating
                        name="Clarity"
                        value={clarityValue}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setClarityValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setClarityHover(newHover);
                        }}
                    />
                    {clarityValue !== null && <Box ml={2}>{clarity[clarityHover !== -1 ? clarityHover : clarityValue]}</Box>}
                </td>
            </tr>
            <tr>
                <td>Approachability</td>
                <td>
                    <Rating
                        name="Approachability"
                        value={approachabilityValue}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setApproachabilityValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setApproachabilityHover(newHover);
                        }}
                    />
                    {approachabilityValue !== null && <Box ml={2}>{approachability[approachabilityHover !== -1 ? approachabilityHover : approachabilityValue]}</Box>}
                </td>
            </tr>
            </Table>
        </div>);
  }
  export default SubmitReviewRating;