import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

function SchoolName(props){
      return(
        <div style={{textAlign: 'center'}}>
        <Typography variant="h1" component="h2">
        {props.school}
        </Typography>
        </div>);
    }
    export default SchoolName;