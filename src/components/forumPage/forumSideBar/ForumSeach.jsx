import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function ForumSeach(){
    return(
        <div>
            <form noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
            </form>
        </div>);
  }
  
  export default ForumSeach;