import React, { useState } from 'react';
import ReviewsSideBar from './ReviewsSideBar.jsx';
import NavBar from '../NavBar.jsx'
import ClassesSideBar from './ClassesSideBar.jsx'
import SplitPane, { Pane } from 'react-split-pane';
import SummaryReview from './summaryReview/SummaryReview.jsx'

function ReviewFinal(){
  const [newName, setNewName] = useState("nachenberg");
  function changeProfName(profName) {
    setNewName(profName);
  }
    return(
      <div>
        <SplitPane split="horizontal" minSize={70} paneStyle={{overflow: "auto"}}>
          <div>
            <NavBar />
          </div>
          <div>
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
          </div>
        </SplitPane>
      </div>);
  }
  export default ReviewFinal;