import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#4791db',
    },
  },
});


function ClassSearch(){
    return(
        <div>
         <ThemeProvider theme={theme}>
            <form noValidate autoComplete="off">
                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
            </form>
        </ThemeProvider>
        </div>);
  }
  
  export default ClassSearch;