import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import Box from '@material-ui/core/Box';
import TabsForum from './TabsForum.jsx'
import ForumSidebar from './forumSideBar/ForumSidebar.jsx'
import Divider from '@material-ui/core/Divider';
import AddQuestion from './addQuestion/AddQuestion.jsx'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Alata"',
      'Roboto',
      '"sans-serif"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#4791db',
    },
  },
});

function Forum(){
    return(
      <div>
        <ThemeProvider theme={theme}>
        <NavBar/>
          <Divider/>
          <TabsForum/>
        </ThemeProvider>
      </div>);
  }
  export default Forum;