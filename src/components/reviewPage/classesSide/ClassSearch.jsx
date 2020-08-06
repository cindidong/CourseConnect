import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      minWidth: '100%',
    },
  },
}));


function ClassSearch(){
    const classes = useStyles();
    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search" variant="outlined" />
            </form>
        </div>);
  }
  
  export default ClassSearch;