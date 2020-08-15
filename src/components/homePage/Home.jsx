import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../NavBar.jsx'
import HomeCards from './HomeCards.jsx'
import HomeSchool from './HomeSchool.jsx'
import SchoolName from './SchoolName.jsx'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import '../NavBar.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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


function Home(){
    return(
      <div>
        <ThemeProvider theme={theme}>
        <NavBar/>
        <Divider />
        <HomeSchool/>
        <HomeCards/>
        </ThemeProvider>
      </div>);
  }
  export default Home;