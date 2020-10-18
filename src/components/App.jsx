import React from 'react';
import ReviewFinal from './reviewPage/ReviewFinal'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import ClassesSideBar from './reviewPage/classesSide/ClassesSideBar.jsx'
import SingleReview from './reviewPage/reviewFormat/SingleReview.jsx'
import SummaryReview from './reviewPage/summaryReview/SummaryReview.jsx'
import HomeCards from './homePage/HomeCards.jsx'
import Home from './homePage/Home.jsx'
import Forum from './forumPage/Forum.jsx'
import SubmitReviewForm from './reviewSubmission/SubmitReviewForm.jsx'
//import { BrowserRouter } from 'react-router-dom';
//import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import 'bootstrap/dist/css/bootstrap.min.css';

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
            main: '#1976d2',
          },
          secondary: {
            main: '#4791db',
          },
    },
  });

var isLoggedIn = false;

function App(){
    return(
    <div>
    <ThemeProvider theme={theme}>
        {isLoggedIn ? <Home /> : <SignIn />}
    </ThemeProvider>
    </div>);
}

export default App;
