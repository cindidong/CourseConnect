import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import UCLA from './ucla.png';

//NOT IN USE
function SchoolName(props){
      return(
        <div style={{textAlign: 'center'}}>
        <Typography variant="h1" component="h2">
        <img
          src={props.school}
          width="500"
          height="150"
          className="d-inline-block align-top"
          alt={props.school}
        />
        </Typography>
        </div>);
    }
    export default SchoolName;