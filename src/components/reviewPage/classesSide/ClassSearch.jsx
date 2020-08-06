import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function ClassSearch(){
    return(
        <div>
            <form noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
            </form>
        </div>);
  }
  
  export default ClassSearch;