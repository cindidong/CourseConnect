import React, { useState } from 'react';
import { useEffect } from 'react';
import ReviewsSideBar from './reviewFormat/ReviewsSideBar.jsx';
import NavBar from '../NavBar.jsx'
import ClassesSideBar from './classesSide/ClassesSideBar.jsx'
import SplitPane, { Pane } from 'react-split-pane';
import SummaryReview from './summaryReview/SummaryReview.jsx'
import Divider from '@material-ui/core/Divider';
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

function ReviewFinal(){
  const [newName, setNewName] = useState("Nachenberg");
  function changeProfName(profName) {
    setNewName(profName);
  }
    return(
      <div>
        <ThemeProvider theme={theme}>
        <NavBar />
        <Divider/>
        <SplitPane split="vertical" defaultSize={1000} primary="second" paneStyle={{overflow: "auto"}}>
          <div className="Pane1">
              <ClassesSideBar
                changeProfName={changeProfName}
              />
          </div>
          <div className="Pane2">
            <SummaryReview prof={newName}/>
            <ReviewsSideBar 
              prof={newName}
            />
          </div>
        </SplitPane>
        </ThemeProvider>
      </div>);
  }
  export default ReviewFinal;