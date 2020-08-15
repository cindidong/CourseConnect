import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Table from 'react-bootstrap/Table'
import '../../NavBar.css';


function RatingsBar(){
    return(
        <div className="navBarText">
        <Table striped bordered hover>
            <tr>
                <td>Overall</td>
                <td><Rating name="size-large" precision={0.5} defaultValue={3.5} size="large" readOnly/></td>
            </tr>
            <tr>
                <td>Easiness</td>
                <td><Rating name="size-large" precision={0.5} defaultValue={2} readOnly/></td>
            </tr>
            <tr>
                <td>Workload</td>
                <td><Rating name="size-large" precision={0.5} defaultValue={2} readOnly/></td>
            </tr>
            <tr>
                <td>Clarity</td>
                <td><Rating name="size-large" precision={0.5} defaultValue={4.5} readOnly/></td>
            </tr>
            <tr>
                <td>Approachability</td>
                <td><Rating name="size-large" precision={0.5} defaultValue={3.5} readOnly/></td>
            </tr>
            </Table>
        </div>
        );
  }
  
  export default RatingsBar;