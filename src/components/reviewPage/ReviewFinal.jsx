import React, { useState } from 'react';
import { useEffect } from 'react';
import ReviewsSideBar from './reviewFormat/ReviewsSideBar.jsx';
import NavBar from '../NavBar.jsx'
import ClassesSideBar from './classesSide/ClassesSideBar.jsx'
import SplitPane, { Pane } from 'react-split-pane';
import SummaryReview from './summaryReview/SummaryReview.jsx'
import Divider from '@material-ui/core/Divider';

function ReviewFinal(){
  const [newName, setNewName] = useState("Nachenberg");
  function changeProfName(profName) {
    setNewName(profName);
  }
    return(
      <div>
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
      </div>);
  }
  export default ReviewFinal;